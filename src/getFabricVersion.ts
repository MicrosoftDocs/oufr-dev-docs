import { PackageJsonLookup } from '@microsoft/node-core-library';

export function getFabricVersion(): string {
  const packageJsonLookup: PackageJsonLookup = new PackageJsonLookup();
  const fabricPackageJsonFilePath: string | undefined = packageJsonLookup.tryGetPackageJsonFilePathFor(
    require.resolve('office-ui-fabric-react'),
  );

  if (!fabricPackageJsonFilePath) {
    throw new Error('Unable to find package.json file path for office-ui-fabric-react');
  }

  return packageJsonLookup.loadPackageJson(fabricPackageJsonFilePath).version;
}
