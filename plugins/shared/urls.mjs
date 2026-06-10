export const normalizeLink = url => {
  if (!url) return '/';

  return url.replace(/\.(md|html)$/, '').replace(/\/index$/, '') || '/';
};

export const toPublicLink = (url, publicPath) => {
  const path = normalizeLink(url);
  const prefix = publicPath ? `/${publicPath.replace(/^\/|\/$/g, '')}` : '';
  return path ? `${prefix}/${path}` : prefix || '/';
};
