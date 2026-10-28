import { lazy, Suspense, useRef, useState } from 'react';
import type { Block, Exercise } from '../content/schema.ts';
import { fetchAttempts, saveConceptPick } from '../progress/client.ts';
import { isStepAttempt, type Attempt } from '../progress/progress.ts';
import { examTopicTitle } from '../progress/readiness.ts';
import { hasCorrectOption, optionFeedback, shuffledOrder, type OptionFeedback } from './conceptQuestion.ts';
import { latestAttempt, textForAi } from './copyForAi.ts';
import { renderInlineMarkdown } from './markdown.ts';
import { prefersReducedMotion, SPRING, springTiming } from './motion.ts';
import { AttemptHistory, MarkingForm } from './marking.tsx';
import { useNodeProgress } from './nodeProgress.tsx';
import { Prose } from './prose.tsx';
import { SourceLink } from './SourceLink.tsx';
import { announceProgressSaved } from './progressEvents.ts';
import { useStreak } from './streak.tsx';
import { TIER_LABEL, TIER_ORDER } from './tiers.ts';

type BlockOf<T extends Block['type']> = Extract<Block, { type: T }>;

const BLOCK_LABEL: Record<Block['type'], string> = {
  'formal-statement': 'Course statement',
  'plain-explanation': 'In plain words',
  'worked-example': 'Example',
  'guided-example': 'Try it yourself',
  'concept-question': 'Concept question',
  trap: 'Trap',
  tip: 'Tip',
  'key-points': 'Key points',
  exercise: 'Exercise',
  'sheet-item': 'Sheet item',
  'going-deeper': 'Going deeper',
  visual: 'Visual',
  section: 'Section',
};

const SHEET_CATEGORY: Record<BlockOf<'sheet-item'>['category'], string> = {
  formula: 'Formula',
  trap: 'Trap',
  recognition: 'Recognition rule',
};

const STATEMENT_KIND = { definition: 'Definition', theorem: 'Theorem', method: 'Method' } as const;

/** The badge icon of a block with a boxed look. A statement without a kind looks like a theorem. */
const STATEMENT_ICON = { definition: '📖', theorem: '📐', method: '🛠️' } as const;
const BLOCK_ICON: Partial<Record<Block['type'], string>> = {
  trap: '⚠️',
  tip: '💡',
  'key-points': '🎯',
  'worked-example': '✏️',
  'guided-example': '🧩',
  'going-deeper': '🔭',
};

const PROVENANCE = {
  'official-key': 'Official key',
  'handout-answer': 'Handout answer with worked solution',
  'written-for-site': 'Written for this site',
} as const;

const VisualBlock = lazy(() => import('./visuals/VisualBlock.tsx'));
const VISUAL_KINDS = new Set([
  'quadric',
  'tangent-plane',
  'gradient',
  'critical-point-viewer',
  'constraint',
  'region',
  'polar-region',
  'cylindrical-region',
  'spherical-region',
  'change-of-variables',
  'solid',
  'curve-sketch',
  'limit',
  'newton',
  'taylor',
  'riemann',
]);

export function BlockView({ block }: { block: Block }) {
  if (block.type === 'section') return null;
  const label = blockLabel(block);
  const icon = blockIcon(block);
  const id =
    block.type === 'exercise' ? `exercise-${block.id}` : block.type === 'sheet-item' ? `sheet-${block.id}` : undefined;
  const kindClass = block.type === 'formal-statement' && block.kind ? ` block-kind-${block.kind}` : '';
  const tierClass = block.type === 'exercise' ? ` block-tier-${block.tier}` : '';
  return (
    <section id={id} className={`block block-${block.type}${kindClass}${tierClass}`} aria-label={label}>
      <p className="block-label">
        {icon ? (
          <>
            <span className="block-icon" aria-hidden="true">
              {icon}
            </span>
            <span className="block-label-text">{label}</span>
          </>
        ) : (
          label
        )}
      </p>
      {renderBlock(block)}
    </section>
  );
}

function blockIcon(block: Block): string | undefined {
  if (block.type === 'formal-statement') return STATEMENT_ICON[block.kind ?? 'theorem'];
  return BLOCK_ICON[block.type];
}

function blockLabel(block: Block): string {
  if (block.type === 'formal-statement' && block.kind) return STATEMENT_KIND[block.kind];
  if (block.type === 'exercise' && block.number) return `Exercise ${block.number}`;
  if (block.type === 'sheet-item') return SHEET_CATEGORY[block.category];
  return BLOCK_LABEL[block.type];
}

function renderBlock(block: Block) {
  switch (block.type) {
    case 'formal-statement':
      return (
        <>
          <OptionalTitle title={block.title} />
          <Prose text={block.text} />
          <p className="statement-source">
            Source: <SourceLink source={block.source} />
          </p>
        </>
      );
    case 'plain-explanation':
    case 'trap':
    case 'tip':
    case 'key-points':
      return <Prose text={block.text} />;
    case 'worked-example':
      return (
        <>
          <OptionalTitle title={block.title} />
          <Prose text={block.problem} />
          <p className="sub-label">Solution</p>
          <Prose text={block.solution} />
        </>
      );
    case 'guided-example':
      return <GuidedExample block={block} />;
    case 'concept-question':
      return <ConceptQuestion block={block} />;
    case 'exercise':
      return <ExerciseView exercise={block} />;
    case 'sheet-item':
      return <Prose text={block.text} />;
    case 'going-deeper':
      return (
        <details className="going-deeper">
          <summary>
            {block.title} <span className="optional">Optional</span>
          </summary>
          <Prose text={block.text} />
        </details>
      );
    case 'section':
      return null;
    case 'visual':
      return (
        <>
          {VISUAL_KINDS.has(block.kind) ? (
            <Suspense fallback={<p className="visual-note">Loading the figure.</p>}>
              <VisualBlock kind={block.kind} params={block.params} />
            </Suspense>
          ) : (
            <p className="visual-note">Visual: {block.kind}</p>
          )}
          {block.caption ? <Prose text={block.caption} /> : null}
        </>
      );
    default: {
      const unreachable: never = block;
      return unreachable;
    }
  }
}

function GuidedExample({ block }: { block: BlockOf<'guided-example'> }) {
  const [shown, setShown] = useState(0);
  const total = block.steps.length;
  return (
    <>
      <OptionalTitle title={block.title} />
      <p className="paper-cue">Work out each step before you reveal it.</p>
      <Prose text={block.problem} />
      {shown > 0 ? (
        <ol className="steps">
          {block.steps.slice(0, shown).map((step, index) => (
            <li key={index}>
              <Prose text={step} />
            </li>
          ))}
        </ol>
      ) : null}
      {shown < total ? (
        <button type="button" className="button" onClick={() => setShown(shown + 1)}>
          Show step {shown + 1} of {total}
        </button>
      ) : null}
    </>
  );
}

const FEEDBACK_ICON: Record<OptionFeedback, string> = { right: '✓', wrong: '✗', reveal: '✓' };
const FEEDBACK_TEXT: Record<OptionFeedback, string> = {
  right: 'Right answer',
  wrong: 'Wrong answer',
  reveal: 'Right answer',
};

const SETTLE = [{ transform: 'scale(0.97)' }, { transform: 'scale(1)' }];
const SHAKE = [
  { transform: 'translateX(0)' },
  { transform: 'translateX(-6px)' },
  { transform: 'translateX(5px)' },
  { transform: 'translateX(-3px)' },
  { transform: 'translateX(0)' },
];

/** `onAnswered` runs once the first pick of a marked question is saved. The review page uses it to offer Next. */
export function ConceptQuestion({ block, onAnswered }: { block: BlockOf<'concept-question'>; onAnswered?: () => void }) {
  // `chosen` and `buttons` use the original option index. Only the display position is shuffled.
  const [order] = useState(() => shuffledOrder(block.options.length));
  const [chosen, setChosen] = useState<number>();
  const [saveError, setSaveError] = useState<string>();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const streak = useStreak();
  const [runAfterFirstPick, setRunAfterFirstPick] = useState<number>();
  const answered = chosen !== undefined;
  const marked = hasCorrectOption(block.options);

  async function saveFirstPick(right: boolean) {
    if (block.id) {
      const saved = await saveConceptPick(block.id, right);
      if (!saved.ok) {
        setSaveError(saved.error);
        return;
      }
      announceProgressSaved();
    }
    onAnswered?.();
  }

  function pick(index: number) {
    if (marked && chosen === undefined) {
      const right = block.options[index]?.correct === true;
      setRunAfterFirstPick(streak?.record(right));
      void saveFirstPick(right);
    }
    setChosen(index);
    const button = buttons.current[index];
    if (marked && button && !prefersReducedMotion() && typeof button.animate === 'function') {
      const right = block.options[index]?.correct === true;
      const timing = springTiming(SPRING);
      button.animate(right ? SETTLE : SHAKE, right ? timing : { duration: 320, easing: 'ease-in-out' });
    }
  }

  return (
    <>
      <Prose text={block.question} />
      <ul className="options">
        {order.map((index) => {
          const option = block.options[index]!;
          const feedback = optionFeedback(block.options, chosen, index);
          return (
            <li key={index}>
              <button
                type="button"
                ref={(element) => {
                  buttons.current[index] = element;
                }}
                className={feedback ? `option option-${feedback}` : 'option'}
                aria-pressed={chosen === index}
                onClick={() => pick(index)}
              >
                <span className="option-text" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(option.text) }} />
                {feedback ? (
                  <span className="option-feedback">
                    <span aria-hidden="true">{FEEDBACK_ICON[feedback]}</span>
                    <span className="visually-hidden">{FEEDBACK_TEXT[feedback]}</span>
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
      {answered ? (
        <div className="explanation">
          {runAfterFirstPick !== undefined && runAfterFirstPick >= 2 ? (
            <p className="streak">{runAfterFirstPick} in a row</p>
          ) : null}
          <p className="sub-label">Explanation</p>
          <Prose text={block.explanation} />
        </div>
      ) : null}
      {saveError ? (
        <p className="form-error" role="alert">
          {saveError}
        </p>
      ) : null}
    </>
  );
}

export function ExerciseView({
  exercise,
  onRecorded,
  mainSave,
}: {
  exercise: Exercise;
  onRecorded?: () => void;
  /** Styles the save button as the main button. Set it only on a screen that shows one exercise. */
  mainSave?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [markedRight, setMarkedRight] = useState(false);
  const nodeProgress = useNodeProgress();
  return (
    <>
      <div className="exercise-meta">
        <TierLadder tier={exercise.tier} />
        {markedRight ? (
          <span className="exercise-done" role="img" aria-label="Marked right">
            ✓
          </span>
        ) : null}
        {exercise.examBlock ? (
          <span className="badge badge-exam-topic">Exam topic: {examTopicTitle(exercise.examBlock)}</span>
        ) : null}
        {exercise.outOfScope ? (
          <span className="badge badge-out-of-scope">Out of current scope</span>
        ) : null}
        {exercise.pastExam ? (
          <span className="past-exam">
            {exercise.pastExam.paper} {exercise.pastExam.year}, question {exercise.pastExam.question},{' '}
            {exercise.pastExam.points} {exercise.pastExam.points === 1 ? 'point' : 'points'}
          </span>
        ) : null}
      </div>
      <p className="paper-cue">
        <span aria-hidden="true">✎</span> Work it on paper, then reveal the solution.
      </p>
      <Prose text={exercise.statement} />
      <div className="exercise-actions">
        <button type="button" className="button" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Hide solution' : 'Reveal solution'}
        </button>
        <CopyForAiButton exercise={exercise} />
      </div>
      {open ? (
        <div className="solution">
          {exercise.provenance ? (
            <span className={`badge badge-${exercise.provenance}`}>{PROVENANCE[exercise.provenance]}</span>
          ) : null}
          <Prose text={exercise.solution} />
          <MarkingForm
            exercise={exercise}
            mainSave={mainSave}
            onSaved={() => {
              setRefresh((value) => value + 1);
              nodeProgress?.reportSaved();
              onRecorded?.();
            }}
          />
          {exercise.discrepancy ? (
            <div className="discrepancy">
              <p className="sub-label">Discrepancy with the official key</p>
              <Prose text={exercise.discrepancy} />
            </div>
          ) : null}
        </div>
      ) : null}
      <AttemptHistory
        exerciseId={exercise.id}
        refresh={refresh}
        onLoaded={(attempts) => setMarkedRight(isMarkedRight(latestAttempt(attempts)))}
      />
    </>
  );
}

function TierLadder({ tier }: { tier: Exercise['tier'] }) {
  const reached = TIER_ORDER.indexOf(tier);
  return (
    <ol className="tier-ladder" aria-label={`Tier: ${TIER_LABEL[tier]}`}>
      {TIER_ORDER.map((step, index) => (
        <li
          key={step}
          className={index <= reached ? 'tier-step tier-step-filled' : 'tier-step'}
          aria-current={index === reached ? 'step' : undefined}
        >
          {TIER_LABEL[step]}
        </li>
      ))}
    </ol>
  );
}

export function isMarkedRight(attempt: Attempt | undefined): boolean {
  if (!attempt) return false;
  if (isStepAttempt(attempt)) return attempt.steps.length > 0 && attempt.steps.every((step) => step.result === 'right');
  return attempt.result === 'right';
}

function CopyForAiButton({ exercise }: { exercise: Exercise }) {
  const [status, setStatus] = useState<string>();
  const [error, setError] = useState<string>();

  async function copy() {
    const result = await fetchAttempts(exercise.id);
    if (!result.ok) {
      setError(result.error);
      setStatus(undefined);
      return;
    }
    try {
      await navigator.clipboard.writeText(textForAi(exercise, latestAttempt(result.value.attempts)));
    } catch {
      setError('The text could not be copied.');
      setStatus(undefined);
      return;
    }
    setError(undefined);
    setStatus('Copied.');
  }

  return (
    <div className="copy-for-ai">
      <button type="button" className="button" onClick={() => void copy()}>
        Copy for AI
      </button>
      {status ? (
        <p className="saved-note" aria-live="polite">
          {status}
        </p>
      ) : null}
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function OptionalTitle({ title }: { title?: string }) {
  if (!title) return null;
  return <h3 className="block-heading">{title}</h3>;
}

