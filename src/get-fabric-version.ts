import {
  FileSystem,
  IPackageJson,
  PackageJsonLookup
} from '@microsoft/node-core-library';
import * as path from 'path';

const [nodePath, scriptPath, outputPath]: Array<(string | undefined)> = process.argv;

if (!outputPath) {
  throw new Error('Must specify an output path as the first argument to this script');
}

if (!path.isAbsolute(outputPath)) {
  throw new Error('The output path must be absolute');
}

const resolvedOutputPath: string = path.resolve(outputPath);

const packageJsonLookup: PackageJsonLookup = new PackageJsonLookup();
const fabricPackageJsonFilePath: string | undefined = packageJsonLookup.tryGetPackageJsonFilePathFor(
  require.resolve('office-ui-fabric-react')
);

if (!fabricPackageJsonFilePath) {
  throw new Error('Unable to find package.json file path for office-ui-fabric-react');
}

const fabricPackageJsonFile: IPackageJson = packageJsonLookup.loadPackageJson(fabricPackageJsonFilePath);
FileSystem.writeFile(resolvedOutputPath, fabricPackageJsonFile.version, { ensureFolderExists: true });
