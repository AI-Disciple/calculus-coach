import { createContext, useContext, useState, type ReactNode } from 'react';
import { nextStreak } from './conceptQuestion.ts';

interface Streak {
  count: number;
  record: (firstPickWasRight: boolean) => number;
}

const StreakContext = createContext<Streak | undefined>(undefined);

/** Holds the run of right first picks for one visit to a node. Nothing is saved. Mount it with a key per node. */
export function StreakProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const record = (firstPickWasRight: boolean) => {
    const next = nextStreak(count, firstPickWasRight);
    setCount(next);
    return next;
  };
  return <StreakContext.Provider value={{ count, record }}>{children}</StreakContext.Provider>;
}

export function useStreak(): Streak | undefined {
  return useContext(StreakContext);
}
