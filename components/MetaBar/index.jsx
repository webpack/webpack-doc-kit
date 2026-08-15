import MetaBar from '@node-core/ui-components/Containers/MetaBar';
import AvatarGroup from '@node-core/ui-components/Common/AvatarGroup';
import BaseButton from '@node-core/ui-components/Common/BaseButton';
import GitHubIcon from '@node-core/ui-components/Icons/Social/GitHub';
import useSponsors from '../../hooks/useSponsors.mjs';
import { editURL } from '#theme/config';
import SponsorCard from '../Sponsors/Card/index.jsx';
import withIsland from '../../node_modules/@doc-kit/generator-react/src/html/ui/islands/withIsland.jsx';

import styles from './index.module.css';

const OC_URL = 'https://opencollective.com/webpack';

function MetaBarComponent({ metadata, headings = [], readingTime }) {
  const { sponsors } = useSponsors();
  const platinumSponsors = sponsors
    .filter(sponsor => sponsor.monthly.tier === 'platinum')
    .sort((a, b) => b.monthly.value - a.monthly.value);

  const editThisPage =
    metadata.source ?? editURL.replace('{path}', metadata.path);
  const authors = metadata.authors?.split(',').map(id => ({
    image: `https://avatars.githubusercontent.com/${id.trim()}`,
    url: `https://github.com/${id.trim()}`,
    nickname: id,
  }));

  return (
    <MetaBar
      heading="Table of Contents"
      headings={{ items: headings }}
      items={{
        'Reading Time': readingTime,
        ...(authors?.length
          ? {
              Authors: <AvatarGroup avatars={authors} as="a" limit={5} />,
            }
          : {}),
        Contribute: (
          <>
            <GitHubIcon className="fill-neutral-700 dark:fill-neutral-100" />
            <a href={editThisPage}>Edit this page</a>
          </>
        ),
        ...(platinumSponsors.length
          ? {
              [platinumSponsors.length > 1
                ? 'Featured Sponsors'
                : 'Featured Sponsor']: (
                <div className={styles.sponsors}>
                  {platinumSponsors.map(sponsor => (
                    <SponsorCard
                      key={sponsor.slug}
                      sponsor={sponsor}
                      size="sm"
                      showAmount={false}
                    />
                  ))}
                  <BaseButton
                    href={OC_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    kind="primary"
                    className={styles.becomeSponsor}
                  >
                    Become a sponsor
                  </BaseButton>
                </div>
              ),
            }
          : {}),
      }}
    />
  );
}

export default withIsland(MetaBarComponent, {
  name: 'MetaBar',
  on: { idle: true },
});
