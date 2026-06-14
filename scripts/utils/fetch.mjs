// fetch()  wrapper that retries flakey responses like the  GitHub and Open Collective
// occasionally 503 midbuild,so one blip doesn't fail the whole deploy.

const RETRYABLE = new Set([429, 502, 503, 504]);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Use the server's Retry After when it sends one, otherwise back off.
const delayFor = (attempt, baseDelay, response) => {
  const retryAfter = Number(response?.headers.get('retry-after'));
  if (retryAfter > 0) return retryAfter * 1000;
  return baseDelay * 2 ** attempt + Math.random() * baseDelay;
};

/**
 * @param {string | URL} url
 * @param {RequestInit} [options]
 * @param {{ retries?: number, baseDelay?: number, timeout?: number }} [config]
 * @returns {Promise<Response>}
 */
export const fetchWithRetry = async (
  url,
  options,
  { retries = 3, baseDelay = 500, timeout = 15000 } = {}
) => {
  for (let attempt = 0; ; attempt++) {
    let response;

    try {
      response = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(timeout),
      });
      if (response.ok || !RETRYABLE.has(response.status)) return response;
    } catch (error) {
      if (attempt === retries) throw error;
    }

    if (attempt === retries) return response;
    await sleep(delayFor(attempt, baseDelay, response));
  }
};
