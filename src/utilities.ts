import { FileSystem } from '@microsoft/node-core-library';
import * as path from 'path';

/**
 * Helper function to aid in writing the markdown files needed for pages.
 */
export function writeFile(filePath: string, fileData: string, cb?: () => void): boolean {
  try {
    FileSystem.writeFile(filePath, fileData, {
      ensureFolderExists: true
    });

    if (cb) {
      cb();
    }

    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
}

/**
 * Helper function to aid in reading the files.
 */
export function readFile(filePath: string): string {
  try {
    return FileSystem.readFile(filePath);
  } catch (error) {
    console.log(`Can not find a file at path: ${filePath}`);
  }
  return '';
}

/**
 * Helper function that returns a files list in a specific folder.
 */
export function readFolder(folderPath: string): string[] {
  try {
    return FileSystem.readFolder(folderPath).map(file => path.resolve(folderPath, file));
  } catch (error) {
    console.log(`Can not find folder at path: ${folderPath}`);
  }
  return [];
}
