import { useEffect, useRef, useState } from 'react';

/**
 * @param {Record<string, string>} ad
 */
export const adColors = ad => ({
  '--ad-bg': ad.backgroundColor,
  '--ad-bg-dark': ad.backgroundColorDark ?? ad.backgroundColor,
  '--ad-text': ad.textColor,
  '--ad-text-dark': ad.textColorDark ?? ad.textColor,
  '--ad-cta-bg': ad.ctaBackgroundColor,
  '--ad-cta-bg-dark': ad.ctaBackgroundColorDark ?? ad.ctaBackgroundColor,
  '--ad-cta-text': ad.ctaTextColor,
  '--ad-cta-text-dark': ad.ctaTextColorDark ?? ad.ctaTextColor,
});

/**
 * @param {string} zone
 * @param {string} [media]
 */
export default function useCarbonAd(zone, media) {
  const [ad, setAd] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (media && !window.matchMedia(media).matches) return;

    const controller = new AbortController();

    fetch(`https://srv.carbonads.net/ads/${zone}.json`, {
      signal: controller.signal,
    })
      .then(response => (response.ok ? response.json() : null))
      .then(data => data?.ads?.[0]?.statlink && setAd(data.ads[0]))
      .catch(() => {});

    return () => controller.abort();
  }, [zone, media]);

  useEffect(() => {
    if (!ad?.statview || !ref.current) return;

    let timer;
    const observer = new IntersectionObserver(
      entries => {
        clearTimeout(timer);

        if (entries.at(-1).intersectionRatio >= 0.5) {
          timer = setTimeout(() => {
            new Image().src = ad.statview;
            observer.disconnect();
          }, 1000);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [ad]);

  return { ad, ref };
}
