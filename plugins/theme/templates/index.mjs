import { parse } from 'node:path';
import { ReflectionKind } from 'typedoc';
import { getBranchedReflections } from '../utils/branching.mjs';
import { formatHeading } from '../utils/formatting.mjs';
import { PAGE_TYPE_COMMENT } from '../../constants.mjs';
import {
  getPageTarget,
  getSubsectionChildren,
  isSubsectionRoot,
} from '../utils/routing/state.mjs';

/**
 * @param {import('../index.mjs').DocKitThemeContext} ctx
 */
export default function templates(ctx) {
  /**
   * @param {import('typedoc').DeclarationReflection[]} members
   */
  const renderMemberLinks = members =>
    members
      .map(member => `* [\`${member.name}\`](${ctx.urlTo(member)})`)
      .join('\n');

  /**
   * @param {import('typedoc').DeclarationReflection} reflection
   * @param {number} headingLevel
   */
  const renderEntry = (reflection, headingLevel) => {
    const blocks = [
      formatHeading(headingLevel, ctx.partials.memberTitle(reflection)),
      ctx.partials.member(reflection, {
        headingLevel,
        nested: false,
      }),
    ];

    for (const groupedReflection of getBranchedReflections(reflection)) {
      blocks.push(renderEntry(groupedReflection, headingLevel));
    }

    return blocks.filter(Boolean).join('\n\n');
  };

  /**
   * @param {import('typedoc').DeclarationReflection} reflection
   */
  const renderSubsectionRoot = reflection => {
    const members = getSubsectionChildren(reflection);
    const inlineMembers = members.filter(
      member => getPageTarget(member) === reflection
    );
    const pageMembers = members.filter(
      member => getPageTarget(member) !== reflection
    );

    if (reflection.kindOf(ReflectionKind.Namespace | ReflectionKind.Module)) {
      const blocks = [formatHeading(2, ctx.partials.memberTitle(reflection))];

      if (reflection.comment) {
        blocks.push(
          ctx.partials.comment(reflection.comment, {
            headingLevel: 2,
            showTags: false,
          })
        );
      }

      if (pageMembers.length) {
        blocks.push(formatHeading(3, 'Members'));
        blocks.push(renderMemberLinks(pageMembers));
      }

      inlineMembers.forEach(member => {
        blocks.push(renderEntry(member, 2));
      });

      return blocks.filter(Boolean).join('\n\n');
    }

    const blocks = [
      formatHeading(2, ctx.partials.memberTitle(reflection)),
      ctx.partials.member(reflection, {
        headingLevel: 2,
        nested: false,
      }),
    ];

    if (!reflection.type?.declaration?.children?.length && pageMembers.length) {
      blocks.push(formatHeading(3, 'Members'));
      blocks.push(renderMemberLinks(pageMembers));
    }

    return blocks.filter(Boolean).join('\n\n');
  };

  return {
    ...ctx.templates,
    reflection({ model, url }) {
      const title = parse(url).name === 'index' ? model.name : parse(url).name;
      const blocks = [
        `# ${title}`,
        PAGE_TYPE_COMMENT,
        isSubsectionRoot(model)
          ? renderSubsectionRoot(model)
          : renderEntry(model, 2),
      ];
      const footer = ctx.partials.footer();

      if (footer?.trim()) {
        blocks.push(footer);
      }

      return blocks.join('\n\n');
    },
  };
}
