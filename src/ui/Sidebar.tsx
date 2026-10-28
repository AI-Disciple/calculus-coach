import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { Link, NavLink, useLocation, useMatch, useNavigate, useSearchParams } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import type { Lecture } from '../content/schema.ts';
import type { Mastery } from '../progress/dashboard.ts';
import { doneShare, formatDoneShare } from '../progress/readiness.ts';
import { currentTheme, toggleTheme, type Theme } from './theme.ts';
import { useDueCount } from './useDueCount.ts';
import { useMastery } from './useMastery.ts';

const EXPANDED_KEY = 'sidebar-expanded';

const STATE_LABEL: Record<Mastery, string> = {
  'not-started': 'Not started',
  'in-progress': 'In progress',
  done: 'Done',
};

/**
 * The course navigation: the site name, search, the main pages and every lecture with its nodes.
 * On a narrow window it hides behind the Menu button of a small top bar and opens as a panel over the page.
 */
export function Sidebar() {
  const { pathname, search } = useLocation();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dueCount = useDueCount();
  const mastery = useMastery();
  const openNodeId = useMatch('/node/:id')?.params.id;
  const nodeLecture =
    openNodeId === undefined
      ? undefined
      : bundle.lectures.find((lecture) => lecture.nodes.some((node) => node.id === openNodeId))?.number;
  const [expanded, setExpanded] = useState<ReadonlySet<number>>(readExpanded);

  // The panel closes when the page changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname, search]);

  // Escape closes the panel and hands the focus back to the Menu button.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      menuButton.current?.focus();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // The lecture of the open node is expanded when it changes, which includes the first load.
  useEffect(() => {
    if (nodeLecture === undefined) return;
    setExpanded((current) => (current.has(nodeLecture) ? current : new Set(current).add(nodeLecture)));
  }, [nodeLecture]);

  useEffect(() => {
    writeExpanded(expanded);
  }, [expanded]);

  const toggleLecture = (number: number) => {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(number)) next.delete(number);
      else next.add(number);
      return next;
    });
  };

  // A tap on any link in the panel closes it, also when the link leads to the page that is already open.
  const closeOnLink = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element && event.target.closest('a')) setOpen(false);
  };

  return (
    <>
      <header className="site-header mobile-bar">
        <button
          ref={menuButton}
          type="button"
          className="button mobile-menu-button"
          aria-expanded={open}
          aria-controls="site-sidebar"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
        <Link to="/" className="site-name">
          Analysis and Calculus
        </Link>
      </header>
      <nav
        id="site-sidebar"
        className={open ? 'sidebar is-open' : 'sidebar'}
        aria-label="Course"
        onClick={closeOnLink}
      >
        <div className="sidebar-top">
          <Link to="/" className="site-name">
            Analysis and Calculus
          </Link>
          <SearchForm />
        </div>
        <div className="sidebar-scroll">
          <ul className="sidebar-menu">
            <li>
              <NavLink to="/" end className="sidebar-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/review"
                className="sidebar-link"
                aria-label={dueCount ? `Review, ${dueCount} due` : undefined}
              >
                Review
                {dueCount ? (
                  <span className="due-pill" aria-hidden="true">
                    {dueCount}
                  </span>
                ) : null}
              </NavLink>
            </li>
            <li>
              <NavLink to="/mocks" className="sidebar-link">
                Mocks
              </NavLink>
            </li>
            <li>
              <NavLink to="/progress" className="sidebar-link">
                Progress
              </NavLink>
            </li>
            <li>
              <NavLink to="/exercises" className="sidebar-link">
                Exercise bank
              </NavLink>
            </li>
            <li>
              <NavLink to="/lectures" className="sidebar-link">
                Lectures
              </NavLink>
              <ul className="sidebar-lectures">
                {bundle.lectures.map((lecture) => (
                  <SidebarLecture
                    key={lecture.number}
                    lecture={lecture}
                    mastery={mastery}
                    expanded={expanded.has(lecture.number)}
                    current={lecture.number === nodeLecture}
                    onToggle={() => toggleLecture(lecture.number)}
                  />
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <ThemeToggle />
        </div>
      </nav>
      {open ? <div className="sidebar-backdrop" aria-hidden="true" onClick={() => setOpen(false)} /> : null}
    </>
  );
}

function SidebarLecture({
  lecture,
  mastery,
  expanded,
  current,
  onToggle,
}: {
  lecture: Lecture;
  mastery: ReadonlyMap<string, Mastery> | undefined;
  expanded: boolean;
  current: boolean;
  onToggle: () => void;
}) {
  const { number, title, nodes } = lecture;
  const listId = `sidebar-lecture-${number}`;
  const share = mastery ? doneShare(nodes.map((node) => node.id), mastery) : undefined;

  return (
    <li className={current ? 'sidebar-lecture is-current' : 'sidebar-lecture'}>
      <div className="sidebar-lecture-row">
        <NavLink to={`/lecture/${number}`} className="sidebar-lecture-link">
          <span className="sidebar-lecture-number">
            <span className="visually-hidden">Lecture </span>
            {number}
          </span>{' '}
          <span className="sidebar-lecture-text">
            <span className="sidebar-lecture-title">{title}</span>
            {share && nodes.length > 0 ? (
              <>
                {' '}
                <span className="sidebar-lecture-share">{formatDoneShare(share)}</span>
              </>
            ) : null}
          </span>
        </NavLink>
        {nodes.length > 0 ? (
          <button
            type="button"
            className="sidebar-toggle"
            aria-expanded={expanded}
            aria-controls={listId}
            aria-label={`Lecture ${number} topics`}
            onClick={onToggle}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : null}
      </div>
      {expanded && nodes.length > 0 ? (
        <ul id={listId} className="sidebar-nodes">
          {nodes.map((node) => {
            const state = mastery ? (mastery.get(node.id) ?? 'not-started') : undefined;
            return (
              <li key={node.id}>
                <NavLink to={`/node/${node.id}`} className="sidebar-node-link">
                  {state ? (
                    <span
                      className={`sidebar-state sidebar-state-${state}`}
                      role="img"
                      aria-label={STATE_LABEL[state]}
                    />
                  ) : null}
                  <span className="sidebar-node-title">{node.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      ) : null}
    </li>
  );
}

function readExpanded(): ReadonlySet<number> {
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(EXPANDED_KEY) ?? '[]');
    const numbers = Array.isArray(parsed) ? parsed.filter((item): item is number => typeof item === 'number') : [];
    return new Set(numbers);
  } catch {
    return new Set();
  }
}

function writeExpanded(expanded: ReadonlySet<number>) {
  try {
    window.localStorage.setItem(EXPANDED_KEY, JSON.stringify([...expanded].sort((a, b) => a - b)));
  } catch {
    // The sidebar works without storage. The open lectures last until the page is closed.
  }
}

function SearchForm() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(params.get('q') ?? '');

  useEffect(() => {
    setQuery(params.get('q') ?? '');
  }, [params]);

  return (
    <form
      className="search-form"
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        const q = query.trim();
        if (q.length === 0) return;
        navigate(`/search?q=${encodeURIComponent(q)}`);
      }}
    >
      <input
        aria-label="Search"
        placeholder="Search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => currentTheme());
  const toDark = theme === 'light';

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={toDark ? 'Switch to dark theme' : 'Switch to light theme'}
      onClick={() => setTheme(toggleTheme())}
    >
      {toDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.5 1.5M16.9 16.9l1.5 1.5M18.4 5.6l-1.5 1.5M7.1 16.9l-1.5 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M16 3.4A7.6 7.6 0 1 0 20.6 14 6.4 6.4 0 0 1 16 3.4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}
