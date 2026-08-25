import { join } from 'node:path/posix';
import { Application } from 'typedoc';
import { major } from 'semver';
import {
  getSources,
  outputDir,
  getPackageFile,
  typeDocConfig,
} from './utils.mjs';

const generate = async packageDir => {
  const { version } = await getPackageFile(packageDir);

  const app = await Application.bootstrapWithPlugins({
    ...typeDocConfig,
    entryPoints: [join(packageDir, 'types.d.ts')],
    out: join(outputDir, `v${major(version)}.x`),
    publicPath: `/docs/api/v${major(version)}.x/`,
  });

  const project = await app.convert();
  await app.generateOutputs(project);
};

const sources = await getSources();
for (const source of sources) {
  await generate(source);
}
