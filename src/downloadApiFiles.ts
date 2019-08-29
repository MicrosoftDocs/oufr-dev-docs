import * as path from 'path';

import { readFile, writeFile } from './utilities';

const [nodePath, scriptPath, filesOutputPath, env]: Array<string | undefined> = process.argv;

if (!filesOutputPath) {
  throw new Error('Must specify a docs output path as the first argument to this script');
}

if (!path.isAbsolute(filesOutputPath) && env !== 'local') {
  throw new Error('The docs output path must be absolute');
}

const outputDirectory = path.resolve(filesOutputPath);
console.log('outputDirectory: ', outputDirectory);









// function addNewLine(match: string, offset: number, originalString: string): string {
//   return match + '\n    expanded: true';
// }

// const newTocFile: string = tocFile.replace('uid: office-ui-fabric-react!', addNewLine);

// console.log('Modifying TOC yaml: ', tocFilePath);
// writeFile(tocFilePath, newTocFile);
