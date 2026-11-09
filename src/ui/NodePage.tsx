import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { fetchProgress, saveSectionsDone } from '../progress/client.ts';
import { migrateOnce } from '../progress/sectionMarks.ts';
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import type { ContentBundle, CourseNode, Exercise, Lecture, SourceRef } from '../content/schema.ts';
import { BlockView } from './blocks.tsx';
import { ExerciseTabs, nextLevel, useLevelTabs } from './ExerciseTabs.tsx';
import { TIER_LABEL } from './tiers.ts';
import { findCourseNode, neighbourNodes, nodeTitleFor } from './courseNodes.ts';
import { renderInlineMarkdown } from './markdown.ts';
import { prefersReducedMotion, SPRING, springTiming } from './motion.ts';
import {
  nodeSections,
  sectionForAnchor,
  SECTION_KIND_LABEL,
  type ContentBlock,
  type NodeSection,
} from './nodeSections.ts';
import { MasteryBadge } from './moments.tsx';
import { NodeProgressProvider, useNodeProgress } from './nodeProgress.tsx';
import { estimatedMinutes, exerciseCount } from './nodeTime.ts';
import { Prose } from './prose.tsx';
import { OriginBadge } from './OriginBadge.tsx';
import { SourceLink } from './SourceLink.tsx';
import { StreakProvider } from './streak.tsx';

const EXAM_WEIGHT = {
  high: 'High exam weight',
  medium: 'Medium exam weight',
  low: 'Low exam weight',
  'not-examined': 'Not examined',
} as const;

/** Arrow keys belong to these controls, so they do not change the section. */
const IGNORED_KEY_TARGETS =
  'input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="slider"], [role="tab"], .js-plotly-plot, .visual-block';

export function NodePage() {
  const { id } = useParams();
  const match = id ? findCourseNode(id) : undefined;

  if (!match) {
    return (
      <p className="notice">
        Topic not found. <Link to="/">Home</Link>
      </p>
    );
  }

  return (
    <NodeProgressProvider key={match.node.id} nodeId={match.node.id} nodeTitle={match.node.title}>
      <NodeView lecture={match.lecture} node={match.node} />
    </NodeProgressProvider>
  );
}

function sectionSearch(sectionId: string): string {
  return `?${new URLSearchParams({ section: sectionId })}`;
}

function NodeView({ lecture, node }: { lecture: Lecture; node: CourseNode }) {
  const sections = useMemo(() => nodeSections(node.blocks, node.title), [node]);
  const location = useLocation();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  // A deep link such as #exercise-<id> names a block, and that block's section wins over ?section=.
  const anchor = decodeAnchor(location.hash.replace(/^#/, ''));
  const anchorSection = anchor ? sectionForAnchor(sections, anchor) : undefined;
  const paramIndex = sections.findIndex((section) => section.id === params.get('section'));
  const anchorIndex = anchorSection ? sections.indexOf(anchorSection) : -1;
  const index = anchorIndex >= 0 ? anchorIndex : Math.max(paramIndex, 0);
  const current: NodeSection | undefined = sections[index];

  const nodeProgress = useNodeProgress();
  const [done, setDone] = useState<string[]>([]);
  const doneRef = useRef(done);
  const railNavRef = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const previous = useRef<{ index: number; id: string } | null>(null);
  const animation = useRef<Animation | null>(null);

  // The marks live in the progress file. Marks an older version kept in this browser move there first.
  useEffect(() => {
    let cancelled = false;
    void migrateOnce()
      .then(() => fetchProgress())
      .then((result) => {
        if (cancelled || !result.ok) return;
        doneRef.current = [...new Set([...(result.value.sectionsDone?.[node.id] ?? []), ...doneRef.current])];
        setDone(doneRef.current);
      });
    return () => {
      cancelled = true;
    };
  }, [node.id]);

  /** Only Next at the bottom of a section, or the finish button on the last one, calls this. */
  function markDone(sectionId: string) {
    if (doneRef.current.includes(sectionId)) return;
    doneRef.current = [...doneRef.current, sectionId];
    setDone(doneRef.current);
    void saveSectionsDone(node.id, [sectionId]).then((result) => {
      if (result.ok) nodeProgress?.reportSaved();
    });
  }

  function goTo(sectionId: string) {
    navigate({ search: sectionSearch(sectionId), hash: '' });
  }

  // Keep the URL in step with the section a deep link opened.
  useEffect(() => {
    if (anchorSection && params.get('section') !== anchorSection.id) {
      navigate({ search: sectionSearch(anchorSection.id), hash: `#${anchor}` }, { replace: true });
    }
  }, [anchor, anchorSection, params, navigate]);

  // Once the section is rendered, bring the linked block into view.
  useLayoutEffect(() => {
    if (!anchorSection || anchorSection.id !== current?.id) return;
    const target = document.getElementById(anchor);
    if (!target) return;
    target.style.scrollMarginTop = `${stickyOffset()}px`;
    target.scrollIntoView({ block: 'start', behavior: 'instant' });
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }, [anchor, anchorSection, current?.id, location.key]);

  // A change of section: slide the new one in and keep its top in view. Leaving a section marks nothing.
  useLayoutEffect(() => {
    const before = previous.current;
    previous.current = current ? { index, id: current.id } : null;
    if (!before || !current || before.id === current.id) return;

    const element = sectionRef.current;
    const direction = Math.sign(index - before.index);
    if (element && direction !== 0 && typeof element.animate === 'function') {
      animation.current?.cancel();
      const distance = Math.min(element.clientWidth * 0.25, 96);
      animation.current = element.animate(
        prefersReducedMotion()
          ? [{ opacity: 0 }, { opacity: 1 }]
          : [{ transform: `translateX(${direction * distance}px)`, opacity: 0 }, { transform: 'none', opacity: 1 }],
        springTiming(SPRING),
      );
    }

    if (!anchorSection) {
      const rail = railNavRef.current;
      if (rail && rail.getBoundingClientRect().top < stickyOffset()) {
        rail.style.scrollMarginTop = `${stickyOffset()}px`;
        rail.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
      headingRef.current?.focus({ preventScroll: true });
    }
    // anchorSection is read at the moment the section id changes.
  }, [current?.id]);

  // ArrowLeft and ArrowRight move between sections.
  const move = useRef((_step: number) => {});
  move.current = (step: number) => {
    const target = sections[index + step];
    if (target) goTo(target.id);
  };
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      if (event.target instanceof Element && event.target.closest(IGNORED_KEY_TARGETS)) return;
      move.current(event.key === 'ArrowRight' ? 1 : -1);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const minutes = useMemo(() => estimatedMinutes(sections), [sections]);
  const exercises = useMemo(() => exerciseCount(node.blocks), [node]);
  const neighbours = useMemo(() => neighbourNodes(node.id), [node]);
  const sourceGroups = useMemo(() => topicSources(node), [node]);
  const practiseExercises = useMemo(
    () => sections.find((section) => section.kind === 'practise')?.blocks.filter(isExercise) ?? [],
    [sections],
  );
  const levels = useLevelTabs(practiseExercises, anchor);
  // In Practise, Next opens the next tier's tab before it leaves the section.
  const nextTier = current?.kind === 'practise' ? nextLevel(levels) : undefined;
  const topicNumber = `${lecture.number}.${lecture.nodes.indexOf(node) + 1}`;

  const learnCount = sections.filter((section) => section.kind === 'learn').length;
  const learnNumber = sections.slice(0, index + 1).filter((section) => section.kind === 'learn').length;
  const before = sections[index - 1];
  const after = sections[index + 1];
  const eyebrow = !current
    ? undefined
    : current.title === SECTION_KIND_LABEL[current.kind]
      ? undefined
      : current.kind === 'learn' && learnCount > 1
        ? `Learn ${learnNumber} of ${learnCount}`
        : SECTION_KIND_LABEL[current.kind];

  return (
    <article className="node">
      <header className="node-header">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to={`/lecture/${lecture.number}`}>Lecture {lecture.number}</Link>
          <span className="breadcrumb-sep" aria-hidden="true">
            ·
          </span>
          <span className="breadcrumb-title">{lecture.title}</span>
        </nav>
        <h1>
          <span className="topic-number">{topicNumber}</span> {node.title}
        </h1>
        {node.status === 'draft' ? (
          <p className="node-draft-note">
            <span className="badge badge-status-draft">Draft</span> Content is still thin.
          </p>
        ) : null}
        <div className="node-meta">
          <div className="node-tags">
            <MasteryBadge state={nodeProgress?.mastery ?? 'not-started'} />
            <span
              className={`badge badge-weight-${node.examWeight}`}
              title={node.examWeightNote}
              tabIndex={node.examWeightNote ? 0 : undefined}
            >
              {EXAM_WEIGHT[node.examWeight]}
            </span>
            <OriginBadge node={node} />
          </div>
          <p className="node-facts">
            <span className="node-fact">about {minutes} min</span>
            <span className="node-fact">
              {exercises} {exercises === 1 ? 'exercise' : 'exercises'}
            </span>
          </p>
        </div>
        {node.prerequisites.length > 0 ? (
          <p className="node-builds-on">
            Do first:{' '}
            {node.prerequisites.map((prerequisiteId, prerequisiteIndex) => (
              <span key={prerequisiteId}>
                {prerequisiteIndex > 0 ? <span aria-hidden="true"> · </span> : null}
                <Link to={`/node/${prerequisiteId}`}>{nodeTitleFor(prerequisiteId)}</Link>
              </span>
            ))}
          </p>
        ) : null}
        {sourceGroups.length > 0 ? (
          <details className="node-sources">
            <summary>Sources</summary>
            <dl className="node-sources-body">
              {sourceGroups.map((group) => (
                <div key={group.kind}>
                  <dt className="block-label">{SOURCE_KIND_LABEL[group.kind]}</dt>
                  {group.sources.map((source) => (
                    <dd key={sourceKey(source)}>
                      <SourceLink source={source} />
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
          </details>
        ) : null}
      </header>

      <StreakProvider key={node.id}>
        {current ? (
          <>
            <nav className="section-rail" aria-label="Sections" ref={railNavRef}>
              <ol>
                {sections.map((section) => {
                  const isDone = done.includes(section.id);
                  const kindLabel = SECTION_KIND_LABEL[section.kind];
                  return (
                    <li key={section.id}>
                      <Link
                        to={{ search: sectionSearch(section.id), hash: '' }}
                        className={isDone ? 'rail-step rail-step-done' : 'rail-step'}
                        aria-current={section.id === current.id ? 'step' : undefined}
                      >
                        <span className="rail-marker" aria-hidden="true">
                          {isDone ? '✓' : ''}
                        </span>
                        <span className="rail-text">
                          <span className="rail-kind">{kindLabel}</span>
                          {section.title !== kindLabel ? (
                            <>
                              {' '}
                              <span
                                className="rail-title"
                                dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(section.title) }}
                              />
                            </>
                          ) : null}
                          {isDone ? <span className="visually-hidden">, done</span> : null}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </nav>

            <div className="node-section-clip">
              <section
                key={current.id}
                ref={sectionRef}
                className={`node-section node-section-${current.kind}`}
                aria-labelledby={`section-title-${current.id}`}
              >
                <header className="node-section-header">
                  {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
                  <h2
                    id={`section-title-${current.id}`}
                    ref={headingRef}
                    tabIndex={-1}
                    className={current.kind === 'learn' ? 'section-heading-numbered' : `section-heading-${current.kind}`}
                    data-number={current.kind === 'learn' ? `${learnNumber}.` : undefined}
                    dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(current.title) }}
                  />
                </header>
                <div className="node-section-body">
                  {node.notation && current.kind === 'learn' && learnNumber === 1 ? (
                    <section className="notation" aria-label="Notation">
                      <p className="block-label">Notation</p>
                      <Prose text={node.notation} />
                    </section>
                  ) : null}
                  {current.kind === 'practise' ? (
                    <ExerciseTabs exercises={practiseExercises} levels={levels} />
                  ) : (
                    <BlockGroups blocks={current.blocks} />
                  )}
                  {current.yourTurn.length > 0 ? (
                    <div className="your-turn">
                      <h3>Your turn</h3>
                      <BlockGroups blocks={current.yourTurn} />
                    </div>
                  ) : null}
                </div>
              </section>
            </div>

            <nav className="section-nav" aria-label="Section navigation">
              {before ? (
                <button type="button" className="button section-back" onClick={() => goTo(before.id)}>
                  <span className="section-nav-label">Back</span>{' '}
                  <span
                    className="section-nav-caption"
                    dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(before.title) }}
                  />
                </button>
              ) : null}
              {nextTier ? (
                <button
                  type="button"
                  className="button button-main section-next"
                  onClick={() => {
                    levels.select(nextTier);
                    railNavRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
                  }}
                >
                  Next: {TIER_LABEL[nextTier]}
                </button>
              ) : after ? (
                <button
                  type="button"
                  className="button button-main section-next"
                  onClick={() => {
                    markDone(current.id);
                    goTo(after.id);
                  }}
                >
                  Next: <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(after.title) }} />
                </button>
              ) : neighbours.next ? (
                // The last section ends the topic, so its button finishes it and opens the next one.
                <Link
                  to={`/node/${neighbours.next.id}`}
                  className="button button-finish section-next"
                  onClick={() => markDone(current.id)}
                >
                  <span className="finish-label">Topic done · next topic</span>
                  <span className="finish-title">{neighbours.next.title}</span>
                </Link>
              ) : (
                <Link
                  to={`/lecture/${lecture.number}`}
                  className="button button-finish section-next"
                  onClick={() => markDone(current.id)}
                >
                  <span className="finish-label">Topic done</span>
                  <span className="finish-title">Back to lecture {lecture.number}</span>
                </Link>
              )}
            </nav>
          </>
        ) : null}
      </StreakProvider>
    </article>
  );
}

type SourceKind = ContentBundle['sources'][number]['kind'];

/** Source kinds in the order the Sources list shows them. */
const SOURCE_KIND_LABEL: Record<SourceKind, string> = {
  handout: 'Handout',
  'lecture-notes': 'Lecture notes',
  'board-photo': 'Board photos',
  'exercise-sheet': 'Exercise sheets',
  'past-paper': 'Past papers',
  'course-document': 'Course documents',
};

function sourceKey(source: SourceRef): string {
  return `${source.source}|${source.section ?? ''}|${source.page ?? ''}`;
}

/** Every source the topic cites, its own and its blocks', once each and grouped by kind in a fixed order. */
function topicSources(node: CourseNode): { kind: SourceKind; sources: SourceRef[] }[] {
  const seen = new Map<string, SourceRef>();
  const cited = [...node.sources, ...node.blocks.flatMap((block) => ('source' in block && block.source ? [block.source] : []))];
  for (const source of cited) {
    const key = sourceKey(source);
    if (!seen.has(key)) seen.set(key, source);
  }
  const kindOf = (source: SourceRef): SourceKind =>
    bundle.sources.find((entry) => entry.id === source.source)?.kind ?? 'course-document';
  return (Object.keys(SOURCE_KIND_LABEL) as SourceKind[])
    .map((kind) => ({ kind, sources: [...seen.values()].filter((source) => kindOf(source) === kind) }))
    .filter((group) => group.sources.length > 0);
}

function isExercise(block: ContentBlock): block is Exercise {
  return block.type === 'exercise';
}

function BlockGroups({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {groupBlocks(blocks).map((group, index) =>
        group.length === 2 ? (
          <div className="statement-group" key={index}>
            <BlockView block={group[0]} />
            <BlockView block={group[1]} />
          </div>
        ) : (
          <BlockView key={index} block={group[0]} />
        ),
      )}
    </>
  );
}

/** A formal statement followed directly by a plain explanation is shown as one pair. */
function groupBlocks(blocks: ContentBlock[]): ContentBlock[][] {
  const groups: ContentBlock[][] = [];
  for (let i = 0; i < blocks.length; i++) {
    const next = blocks[i + 1];
    if (blocks[i].type === 'formal-statement' && next?.type === 'plain-explanation') {
      groups.push([blocks[i], next]);
      i++;
    } else {
      groups.push([blocks[i]]);
    }
  }
  return groups;
}

/** Height of the sticky site header plus a little air, for scrolling a target below it. */
function stickyOffset(): number {
  const header = document.querySelector('.site-header');
  return (header ? header.getBoundingClientRect().height : 0) + 16;
}

function decodeAnchor(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
