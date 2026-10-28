import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import { fetchDue } from '../progress/client.ts';
import { courseItemIds } from '../progress/course.ts';
import { reviewsInCourse } from '../progress/progress.ts';
import { onProgressSaved } from './progressEvents.ts';

const itemIds = courseItemIds(bundle);

/**
 * How many review items in this course are due. It is undefined until the first answer arrives.
 * The count is fetched again whenever the route changes and whenever an attempt is saved, so it is fresh after a
 * review or a marking. A failed request keeps the last count, because the sidebar must not flicker over a passing error.
 */
export function useDueCount(): number | undefined {
  const { pathname } = useLocation();
  const [count, setCount] = useState<number>();
  const [saves, setSaves] = useState(0);

  useEffect(() => onProgressSaved(() => setSaves((value) => value + 1)), []);

  useEffect(() => {
    let cancelled = false;
    void fetchDue().then((result) => {
      if (cancelled || !result.ok) return;
      setCount(reviewsInCourse(result.value.due, itemIds).length);
    });
    return () => {
      cancelled = true;
    };
  }, [pathname, saves]);

  return count;
}
