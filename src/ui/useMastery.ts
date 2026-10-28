import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMastery } from '../progress/client.ts';
import type { Mastery } from '../progress/dashboard.ts';
import { onProgressSaved } from './progressEvents.ts';

/**
 * The mastery of every visible node, by node id. It is undefined until the first answer arrives.
 * It is fetched again whenever the route changes and whenever an attempt is saved, so the sidebar stays fresh.
 * A failed request keeps the last value, because the sidebar must not flicker over a passing error.
 */
export function useMastery(): ReadonlyMap<string, Mastery> | undefined {
  const { pathname } = useLocation();
  const [mastery, setMastery] = useState<ReadonlyMap<string, Mastery>>();
  const [saves, setSaves] = useState(0);

  useEffect(() => onProgressSaved(() => setSaves((count) => count + 1)), []);

  useEffect(() => {
    let cancelled = false;
    void fetchMastery().then((result) => {
      if (cancelled || !result.ok) return;
      setMastery(new Map(result.value.nodes.map((node) => [node.nodeId, node.mastery])));
    });
    return () => {
      cancelled = true;
    };
  }, [pathname, saves]);

  return mastery;
}
