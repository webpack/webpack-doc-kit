import PartialArticle from '../PartialArticle/index.jsx';
import SponsorBoard from './Board.jsx';

/**
 * Sponsors page layout. Lists Open Collective sponsors by tier with a control to re-rank
 * them by recurring monthly amount or all-time contribution, plus a backer wall and CTA.
 *
 * @param {{ metadata: object }} props
 */
export default function SponsorsLayout({ metadata }) {
  return (
    <PartialArticle metadata={metadata}>
      <SponsorBoard />
    </PartialArticle>
  );
}
