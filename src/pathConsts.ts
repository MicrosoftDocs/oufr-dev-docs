import * as path from 'path';

import { IDeepPaths, IPaths } from './interfaces';

const [nodePath, scriptPath, docsOutputPath, documenterInputFilesPath, env]: Array<string | undefined> = process.argv;

if (!docsOutputPath) {
  throw new Error('Must specify a docs output path as the first argument to this script');
}

if (!path.isAbsolute(docsOutputPath) && env !== 'local') {
  throw new Error('The docs output path must be absolute');
}

export const deepPaths: IDeepPaths = {
  fabricDocs: path.resolve(__dirname, '..', 'node_modules', 'office-ui-fabric-react', 'src', 'components'),
  getStartedDocs: path.resolve(
    __dirname,
    '..',
    'node_modules',
    '@uifabric',
    'fabric-website',
    'src',
    'pages',
    'Overviews',
    'GetStartedPage',
    'docs',
    'web',
  ),
  resourcesDocs: path.resolve(
    __dirname,
    '..',
    'node_modules',
    '@uifabric',
    'fabric-website',
    'src',
    'pages',
    'Overviews',
    'ResourcesPage',
    'docs',
    'default',
  ),
};

export const tocPaths: IPaths = {
  example: '~/api/examples',
  overview: '~/api/overviews',
  getStarted: '~/api/getstarted/getStartedPage.md',
  resources: '~/api/resources/resourcesPage.md',
};

export const templatePaths: IPaths = {
  example: path.resolve(__dirname, '..', 'src', 'templates', 'ExampleMarkdown.mustache'),
  overview: path.resolve(__dirname, '..', 'src', 'templates', 'Overview.mustache'),
  getStarted: path.resolve(__dirname, '..', 'src', 'templates', 'GetStarted.mustache'),
  resources: path.resolve(__dirname, '..', 'src', 'templates', 'Resources.mustache'),
};

export const outputPaths: IPaths = {
  example: path.resolve(docsOutputPath, 'examples'),
  overview: path.resolve(docsOutputPath, 'overviews'),
  getStarted: path.resolve(docsOutputPath, 'getstarted', 'getStartedPage.md'),
  resources: path.resolve(docsOutputPath, 'resources', 'resourcesPage.md'),
};

// export const inputFilesPath: string = path.resolve(__dirname, '..', documenterInputFilesPath);
// replace with this one when having the api.json files loaded from the azure blob
export const inputFilesPath: string = env === 'local' ? path.resolve(__dirname, '..', documenterInputFilesPath) : documenterInputFilesPath;
