import { registerHooks } from 'node:module';

// TODO(@avivkeller): Fix upstream `peerDependencies`
const PROJECT = import.meta.resolve('../../../package.json');

registerHooks({
  resolve: (specifier, context, nextResolve) =>
    specifier === 'typedoc' || specifier.startsWith('typedoc/')
      ? nextResolve(specifier, { ...context, parentURL: PROJECT })
      : nextResolve(specifier, context),
});
