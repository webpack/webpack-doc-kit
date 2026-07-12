export const normalizeLink = url => {
  if (!url) return '';

  return url
    .replace(/\.(md|html)$/, '')
    .replace(/\/index$/, '')
    .replace(/^\//, '');
};

export const toPublicLink = (url, publicPath = '') => {
  const path = normalizeLink(url);
  const prefix = publicPath.replace(/^\/+|\/+$/g, '');
  const combined = [prefix, path].filter(Boolean).join('/');
  return `/${combined}`;
};
