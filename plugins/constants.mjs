import { ReflectionKind } from 'typedoc';

// --- branching ---

export const FAMILY_ROOT_KIND_PRIORITY = new Map([
  [ReflectionKind.Interface, 0],
  [ReflectionKind.Class, 1],
  [ReflectionKind.Enum, 2],
  [ReflectionKind.TypeAlias, 3],
  [ReflectionKind.Function, 4],
  [ReflectionKind.Variable, 5],
  [ReflectionKind.Namespace, 6],
  [ReflectionKind.Module, 7],
]);

/** Minimum number of reflections for a family candidate to be accepted. */
export const FAMILY_MIN_MEMBERS = 2;

/** Minimum number of CamelCase tokens in a prefix for it to qualify without an exact root. */
export const FAMILY_MIN_TOKEN_COUNT = 2;

/** Minimum number of members for a single-token family without an exact root. */
export const FAMILY_MIN_MEMBERS_SINGLE_TOKEN = 5;

/** A sub-family must cover at least this fraction of the parent family's members to suppress it. */
export const FAMILY_COVERAGE_THRESHOLD = 0.8;

// --- formatting ---

/** Maximum rendered heading level (H5). */
export const MAX_HEADING_LEVEL = 5;

// --- templates ---

export const PAGE_TYPE_COMMENT = '<!-- type=misc -->';

// --- helpers ---

export const VOID_TYPE_LABEL = 'void';
export const TYPE_LABEL = 'Type';
export const INDENT_UNIT = '  ';

// --- utils/types ---

export const ANONYMOUS_REF_NAMES = ['__module', 'exports'];
export const EXCLUDED_FILENAMES = ['index', 'types'];

// --- routing-state ---

/** Identifies top-level subsection children by a lowercase-leading name. */
export const LOWERCASE_START_PATTERN = /^[a-z]/;

/** Strips `__type` segments from fully-qualified reflection names. */
export const CLEAN_TYPE_PATTERN = /(?:^|\.)__type(?=\.|$)/g;
