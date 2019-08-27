import * as path from 'path';

import { readFile, writeFile } from './utilities';

const [nodePath, scriptPath, filePath, env]: Array<string | undefined> = process.argv;

if (!filePath) {
  throw new Error('Must specify a docs output path as the first argument to this script');
}

if (!path.isAbsolute(filePath) && env !== 'local') {
  throw new Error('The docs output path must be absolute');
}

const tocFilePath = path.resolve(filePath, 'toc.yml');

const tocFile = readFile(tocFilePath);

function addNewLine(match: string, offset: number, originalString: string): string {
  return match + '\n    expanded: true';
}

const newTocFile: string = tocFile.replace('uid: office-ui-fabric-react!', addNewLine);
//   .replace(/items:\n/, '\n')
//   .replace(/\n\s\s/g, '\n');

writeFile(tocFilePath, newTocFile);
