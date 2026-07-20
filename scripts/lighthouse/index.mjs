// Adapted from https://github.com/nodejs/nodejs.org/blob/main/apps/site/scripts/lighthouse/index.mjs

const CATEGORIES = [
  ['performance', 'Performance'],
  ['accessibility', 'Accessibility'],
  ['best-practices', 'Best Practices'],
  ['seo', 'SEO'],
];

const formatScore = score => {
  if (score === undefined || score === null) {
    return 'n/a';
  }

  const value = Math.round(score * 100);
  const emoji = value >= 90 ? '🟢' : value >= 75 ? '🟠' : '🔴';

  return `${emoji} ${value}`;
};

export const formatLighthouseResults = ({ core }) => {
  const previewUrl = process.env.VERCEL_PREVIEW_URL ?? '';

  const results = JSON.parse(process.env.LIGHTHOUSE_RESULT || '[]');
  const links = JSON.parse(process.env.LIGHTHOUSE_LINKS || '{}');

  const runs = results.filter(result => result.isRepresentativeRun ?? true);

  const header =
    '| URL | ' +
    CATEGORIES.map(([, label]) => label).join(' | ') +
    ' | Report |';
  const divider = `|${' --- |'.repeat(CATEGORIES.length + 2)}`;

  const rows = runs.map(({ url, summary }) => {
    const path = previewUrl ? url.replace(previewUrl, '') || '/' : url;
    const scores = CATEGORIES.map(([key]) => formatScore(summary?.[key])).join(
      ' | '
    );
    const report = links[url] ? `[🔗](${links[url]})` : 'n/a';

    return `| [${path}](${url}) | ${scores} | ${report} |`;
  });

  const comment = [
    '## ⚡ Lighthouse report',
    '',
    previewUrl
      ? `Audited the Vercel preview deployment: ${previewUrl}`
      : 'Audited the Vercel preview deployment.',
    '',
    header,
    divider,
    ...rows,
    '',
    '> Scores are advisory (warn at 90); they do not fail the build. See `.lighthouserc.json`.',
  ].join('\n');

  core.setOutput('comment', comment);

  return comment;
};
