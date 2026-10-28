import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import bundle from 'virtual:content-bundle';
import { fetchMastery, fetchProgress } from '../progress/client.ts';
import { catalogFromBundle } from '../progress/course.ts';
import type { Mastery } from '../progress/dashboard.ts';
import { examReadiness, formatExamRight, topicGainedRight, type ExamReadiness } from '../progress/readiness.ts';
import { MomentToast, type Moment } from './moments.tsx';
import { announceProgressSaved } from './progressEvents.ts';

type NodeProgress = {
  /** The node's mastery, or undefined until it has loaded. */
  mastery: Mastery | undefined;
  /** Call after an attempt is saved. It looks up the new state and shows a moment when the node turns done. */
  reportSaved: () => void;
};

const NodeProgressContext = createContext<NodeProgress | undefined>(undefined);

/** Undefined outside a node page, so an exercise on the review page works without it. */
export function useNodeProgress(): NodeProgress | undefined {
  return useContext(NodeProgressContext);
}

type Snapshot = { mastery: Mastery; readiness: ExamReadiness };

export function NodeProgressProvider({
  nodeId,
  nodeTitle,
  children,
}: {
  nodeId: string;
  nodeTitle: string;
  children: ReactNode;
}) {
  const catalog = useMemo(() => catalogFromBundle(bundle), []);
  const [mastery, setMastery] = useState<Mastery>();
  const [moment, setMoment] = useState<Moment | null>(null);
  const before = useRef<Snapshot | null>(null);
  const counter = useRef(0);
  const request = useRef(0);

  const load = useCallback(async (): Promise<Snapshot | null> => {
    const [progress, report] = await Promise.all([fetchProgress(), fetchMastery()]);
    if (!progress.ok || !report.ok) return null;
    const state = report.value.nodes.find((entry) => entry.nodeId === nodeId)?.mastery ?? 'not-started';
    return { mastery: state, readiness: examReadiness(progress.value, catalog) };
  }, [catalog, nodeId]);

  useEffect(() => {
    let cancelled = false;
    const mine = ++request.current;
    void load().then((snapshot) => {
      if (cancelled || !snapshot || mine !== request.current) return;
      before.current = snapshot;
      setMastery(snapshot.mastery);
    });
    return () => {
      cancelled = true;
    };
  }, [load]);

  const reportSaved = useCallback(() => {
    // The sidebar and the due count read their numbers again when this fires.
    announceProgressSaved();
    const mine = ++request.current;
    void load().then((after) => {
      if (!after || mine !== request.current) return;
      const earlier = before.current;
      before.current = after;
      setMastery(after.mastery);
      if (!earlier || earlier.mastery === 'done' || after.mastery !== 'done') return;
      // The count is named only when this save made an exam exercise right.
      const gained = topicGainedRight(earlier.readiness, after.readiness);
      counter.current += 1;
      setMoment({
        id: counter.current,
        heading: `${nodeTitle} is done`,
        body: gained ? `${gained.title}: ${formatExamRight(gained)}.` : 'Every section is read and every Core exercise is marked right.',
      });
    });
  }, [load, nodeTitle]);

  const value = useMemo(() => ({ mastery, reportSaved }), [mastery, reportSaved]);
  return (
    <NodeProgressContext.Provider value={value}>
      {children}
      <MomentToast moment={moment} onDismiss={() => setMoment(null)} />
    </NodeProgressContext.Provider>
  );
}
