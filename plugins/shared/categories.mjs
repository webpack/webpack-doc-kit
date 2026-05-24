import { ReflectionKind } from 'typedoc';

// First match wins. Keep more specific groups above broad API-family rules so
// adding a new category is usually a single RegExp entry rather than router code.
const CATEGORY_RULES = [
  {
    category: 'plugins',
    match: reflection =>
      reflection.kindOf(ReflectionKind.Class) &&
      reflection.name.endsWith('Plugin'),
    pattern: /^WebpackPlugin/,
  },
  {
    category: 'cli',
    pattern: /^(?:Argument|Colors|ColorsOptions|Problem)$/,
  },
  {
    category: 'assets',
    pattern: /^Asset|AssetInfo$/,
  },
  {
    category: 'cache',
    pattern: /Cache|Cached|Etag|ValueCache/,
  },
  {
    category: 'runtime',
    pattern: /^Runtime.*/,
  },
  {
    category: 'stats',
    pattern: /^(?:Multi)?Stats/,
  },
  {
    category: 'errors',
    pattern: /(?:Error|ValidationError)$/,
  },
  {
    category: 'chunks',
    pattern: /^(?:.*Chunk.*|Entrypoint)$/,
  },
  {
    category: 'compilation',
    pattern:
      /^(?:Compilation|Compiler|MultiCompiler|Watching|PathData|CodeGenerationResults?)$/,
  },
  {
    category: 'dependencies',
    pattern: /Dependency/,
  },
  {
    category: 'entries',
    pattern: /^Entry/,
  },
  {
    category: 'externals',
    pattern: /^External|Externals/,
  },
  {
    category: 'filesystem',
    pattern: /FileSystem$/,
  },
  {
    category: 'library',
    pattern: /Library/,
  },
  {
    category: 'loaders',
    pattern: /Loader/,
  },
  {
    category: 'modules',
    pattern:
      /^(?:AsyncDependenciesBlock|.*Dependency|.*Module.*|Generator|Parser)$/,
  },
  {
    category: 'resolvers',
    pattern: /^Resolve/,
  },
  {
    category: 'rules',
    pattern: /^RuleSet/,
  },
  {
    category: 'serialization',
    pattern: /(?:Serializer|Deserializer)/,
  },
  {
    category: 'templates',
    pattern: /^(?:Template|RenderManifest)/,
  },
  {
    category: 'config',
    pattern:
      /^(?:Configuration|MultiConfiguration|.*Options(?:Normalized)?|validate(?:Schema)?|WebpackOptions.*)$/,
  },
];

export const categoryForReflection = reflection => {
  for (const rule of CATEGORY_RULES) {
    if (rule.match?.(reflection) || rule.pattern?.test(reflection.name)) {
      return rule.category;
    }
  }
};
