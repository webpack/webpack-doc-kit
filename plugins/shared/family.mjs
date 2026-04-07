import {
  FAMILY_MIN_MEMBERS,
  FAMILY_MIN_TOKEN_COUNT,
  FAMILY_MIN_MEMBERS_SINGLE_TOKEN,
  FAMILY_COVERAGE_THRESHOLD,
} from '../constants.mjs';

/**
 * @param {string} baseName
 * @param {string} name
 */
export function isBranchedName(baseName, name) {
  if (!name.startsWith(baseName) || name.length <= baseName.length) {
    return false;
  }

  return /[^a-z]/.test(name[baseName.length]);
}

/** @param {string} name */
function getNameTokens(name) {
  return name.match(/[A-Z]+(?=[A-Z][a-z]|\b)|[A-Z]?[a-z]+|[0-9]+/g) ?? [name];
}

/**
 * @param {string} prefix
 * @param {import('typedoc').DeclarationReflection} reflection
 */
export function matchesFamilyPrefix(prefix, reflection) {
  return reflection.name === prefix || isBranchedName(prefix, reflection.name);
}

/**
 * Returns all accepted family candidates for the given set of reflections,
 * sorted from shortest (most general) to longest (most specific) prefix.
 *
 * @param {import('typedoc').DeclarationReflection[]} reflections
 */
export function getFamilyCandidates(reflections) {
  const exactNames = new Set(reflections.map(reflection => reflection.name));
  const candidatePrefixes = new Set();

  reflections.forEach(reflection => {
    const tokens = getNameTokens(reflection.name);

    for (let index = 1; index < tokens.length; index += 1) {
      candidatePrefixes.add(tokens.slice(0, index).join(''));
    }
  });

  const accepted = [...candidatePrefixes]
    .map(prefix => {
      const members = reflections.filter(reflection =>
        matchesFamilyPrefix(prefix, reflection)
      );
      const tokenCount = getNameTokens(prefix).length;
      const hasExactRoot = exactNames.has(prefix);

      return {
        prefix,
        members,
        tokenCount,
        hasExactRoot,
      };
    })
    .filter(
      ({ members, tokenCount, hasExactRoot }) =>
        members.length >= FAMILY_MIN_MEMBERS &&
        (hasExactRoot ||
          tokenCount >= FAMILY_MIN_TOKEN_COUNT ||
          members.length >= FAMILY_MIN_MEMBERS_SINGLE_TOKEN)
    )
    .filter(candidate => {
      if (candidate.tokenCount !== 1 || candidate.hasExactRoot) {
        return true;
      }

      return !acceptedFamilyCoverage(candidate, reflections, exactNames);
    });

  return accepted.sort(
    (left, right) =>
      left.tokenCount - right.tokenCount ||
      left.prefix.length - right.prefix.length ||
      left.prefix.localeCompare(right.prefix)
  );
}

/**
 * @param {{ prefix: string, members: import('typedoc').DeclarationReflection[] }} candidate
 * @param {import('typedoc').DeclarationReflection[]} reflections
 * @param {Set<string>} exactNames
 */
function acceptedFamilyCoverage(candidate, reflections, exactNames) {
  return getFamilyCandidatesForCoverage(reflections, exactNames).some(other => {
    if (
      other.prefix === candidate.prefix ||
      !other.prefix.startsWith(candidate.prefix)
    ) {
      return false;
    }

    const coveredMembers = candidate.members.filter(member =>
      matchesFamilyPrefix(other.prefix, member)
    );

    return (
      coveredMembers.length / candidate.members.length >=
      FAMILY_COVERAGE_THRESHOLD
    );
  });
}

/**
 * @param {import('typedoc').DeclarationReflection[]} reflections
 * @param {Set<string>} exactNames
 */
function getFamilyCandidatesForCoverage(reflections, exactNames) {
  const prefixes = new Set();

  reflections.forEach(reflection => {
    const tokens = getNameTokens(reflection.name);

    for (let index = 1; index < tokens.length; index += 1) {
      prefixes.add(tokens.slice(0, index).join(''));
    }
  });

  return [...prefixes]
    .map(prefix => {
      const members = reflections.filter(reflection =>
        matchesFamilyPrefix(prefix, reflection)
      );

      return {
        prefix,
        members,
        tokenCount: getNameTokens(prefix).length,
        hasExactRoot: exactNames.has(prefix),
      };
    })
    .filter(
      ({ members, tokenCount, hasExactRoot }) =>
        members.length >= FAMILY_MIN_MEMBERS &&
        (hasExactRoot ||
          tokenCount >= FAMILY_MIN_TOKEN_COUNT ||
          members.length >= FAMILY_MIN_MEMBERS_SINGLE_TOKEN)
    );
}
