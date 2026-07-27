import { useEffect, useState } from 'react';

const EMPTY_DATA = { sponsors: [], backers: [] };

/** @returns {Awaited<ReturnType<typeof import('../api/sponsors.mjs').getOpenCollectiveSponsors>>} */
export default function useSponsors() {
  const [data, setData] = useState(EMPTY_DATA);

  useEffect(() => {
    const controller = new AbortController();

    const loadSponsors = async () => {
      try {
        const response = await fetch('/api/sponsors', {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Sponsor API responded ${response.status}`);
        }

        const value = await response.json();
        if (!controller.signal.aborted) setData(value);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error('Failed to load sponsors', error);
        }
      }
    };

    loadSponsors();
    return () => controller.abort();
  }, []);

  return data;
}
