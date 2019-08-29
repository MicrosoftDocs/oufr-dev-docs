import * as path from 'path';

import { FileSystem } from '@microsoft/node-core-library';
import { getFabricVersion } from './getFabricVersion';

const [nodePath, scriptPath, outputPath]: Array<string | undefined> = process.argv;

if (!outputPath) {
  throw new Error('Must specify an output path as the first argument to this script');
}

if (!path.isAbsolute(outputPath)) {
  throw new Error('The output path must be absolute');
}

const resolvedOutputPath: string = path.resolve(outputPath);

const fabricPackageVersion = getFabricVersion();


// This is used only in the pipeline to capture the OUFR package version
// so it can be added into a file to that keeps a history of all updates.
FileSystem.writeFile(resolvedOutputPath, fabricPackageVersion, { ensureFolderExists: true });
