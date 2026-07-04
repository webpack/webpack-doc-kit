import { ReflectionKind } from 'typedoc';

// First match wins. Keep more specific groups above broad API-family rules so
// adding a new category is usually a single RegExp entry rather than router code.
export const CATEGORY_RULES = [
  {
    category: 'optimize',
    label: 'Optimization',
    match: reflection => /^optimize\./i.test(reflection.getFullName()),
  },
  {
    category: 'plugins',
    label: 'Plugins',
    match: reflection =>
      reflection.kindOf(ReflectionKind.Class) &&
      reflection.name.endsWith('Plugin'),
    pattern: /^WebpackPlugin/,
  },
  {
    category: 'cli',
    label: 'Command-Line Interface',
    pattern: /^(?:Argument|Colors|ColorsOptions|Problem)$/,
  },
  {
    category: 'assets',
    label: 'Assets',
    pattern: /^Asset|AssetInfo$/,
  },
  {
    category: 'cache',
    label: 'Cache',
    pattern: /Cache|Cached|Etag|ValueCache/,
  },
  {
    category: 'runtime',
    label: 'Runtime',
    pattern: /^Runtime.*/,
  },
  {
    category: 'stats',
    label: 'Stats',
    pattern: /^(?:Multi)?Stats/,
  },
  {
    category: 'errors',
    label: 'Errors',
    pattern: /(?:Error|ValidationError)$/,
  },
  {
    category: 'chunks',
    label: 'Chunks',
    pattern: /^(?:.*Chunk.*|Entrypoint)$/,
  },
  {
    category: 'compilation',
    label: 'Compilation',
    pattern:
      /^(?:Compilation|Compiler|MultiCompiler|Watching|PathData|CodeGenerationResults?)$/,
  },
  {
    category: 'dependencies',
    label: 'Dependencies',
    pattern: /Dependency/,
  },
  {
    category: 'entries',
    label: 'Entries',
    pattern: /^Entry/,
  },
  {
    category: 'externals',
    label: 'Externals',
    pattern: /^External|Externals/,
  },
  {
    category: 'filesystem',
    label: 'File System',
    pattern: /FileSystem$/,
  },
  {
    category: 'library',
    label: 'Library',
    pattern: /Library/,
  },
  {
    category: 'loaders',
    label: 'Loaders',
    pattern: /Loader/,
  },
  {
    category: 'modules',
    label: 'Modules',
    pattern:
      /^(?:AsyncDependenciesBlock|.*Dependency|.*Module.*|Generator|Parser)$/,
  },
  {
    category: 'resolvers',
    label: 'Resolvers',
    pattern: /^Resolve/,
  },
  {
    category: 'rules',
    label: 'Rules',
    pattern: /^RuleSet/,
  },
  {
    category: 'serialization',
    label: 'Serialization',
    pattern: /(?:Serializer|Deserializer)/,
  },
  {
    category: 'templates',
    label: 'Templates',
    pattern: /^(?:Template|RenderManifest)/,
  },
  {
    category: 'config',
    label: 'Configuration',
    pattern:
      /^(?:Configuration|MultiConfiguration|.*Options(?:Normalized)?|validate(?:Schema)?|WebpackOptions.*)$/,
  },
];

export const categoryForReflection = reflection => {
  for (const rule of CATEGORY_RULES) {
    if (rule.match?.(reflection) || rule.pattern?.test(reflection.name)) {
      return rule;
    }
  }

  return null;
};
