import * as path from 'path';

import { readFile, writeFile } from './start';

const [nodePath, scriptPath, filePath]: Array<string | undefined> = process.argv;

if (!filePath) {
  throw new Error('Must specify a docs output path as the first argument to this script');
}

if (!path.isAbsolute(filePath)) {
  throw new Error('The docs output path must be absolute');
}

const tocFilePath = path.resolve(filePath, 'toc.yml');

const tocFile = readFile(tocFilePath);

function addNewLine(match: string, offset: number, originalString: string): string {
  return match + '    expanded: true\n';
}

const newTocFile: string = tocFile.replace('    uid: office-ui-fabric-react\n', addNewLine);
//   .replace(/items:\n/, '\n')
//   .replace(/\n\s\s/g, '\n');

writeFile(tocFilePath, newTocFile);
