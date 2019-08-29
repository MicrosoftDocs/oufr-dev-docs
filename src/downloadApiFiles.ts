import { JsonFile } from '@microsoft/node-core-library';
import fetch, { Response } from 'node-fetch';
import * as path from 'path';
import { parseString } from 'xml2js';

const [nodePath, scriptPath, filesOutputPath, env]: Array<string | undefined> = process.argv;

if (!filesOutputPath) {
  throw new Error('Must specify a docs output path as the first argument to this script');
}

if (!path.isAbsolute(filesOutputPath) && env !== 'local') {
  throw new Error('The docs output path must be absolute');
}

const outputDirectory = path.resolve(filesOutputPath);

const fileUrlsList: string[] = [];
const fileNamesList: Array<{ nameWithExtension: string; name: string }> = [];

fetch('https://fabricweb.blob.core.windows.net/fabric?restype=container&comp=list&prefix=api-json')
  .then(checkStatus)
  .then(res => res.text())
  .then(body => {
    const fetchPromises: Array<Promise<Response>> = [];

    parseString(body, (err, result) => {
      try {
        result.EnumerationResults.Blobs[0].Blob.forEach((file: any) => {
          fileUrlsList.push(file['Url'][0]);

          const nameWithExtension: string = file['Name'][0].replace('api-json/', '');
          const name: string = nameWithExtension.replace('.api.json', '');

          fileNamesList.push({ nameWithExtension, name });
        });

        for (let i = 0, l = fileUrlsList.length; i < l; i++) {
          fetchPromises.push(fetch(fileUrlsList[i]));
        }
      } catch (error) {
        console.log('Azure blob api call failed: ', error);
      }
    });

    return Promise.all(fetchPromises);
  })
  .then(responses => {
    const responseToJsonPromises: Array<Promise<any>> = [];

    responses.forEach(response => {
      responseToJsonPromises.push(response.json());
    });

    return Promise.all(responseToJsonPromises);
  })
  .then(jsonObjects => {
    jsonObjects.forEach(jsonObject => {
      for (let i = 0, l = fileNamesList.length; i < l; i++) {
        const file = fileNamesList[i];

        if (jsonObject['name'].indexOf(file.name) !== -1 && file.name !== 'date-time') {
          JsonFile.save(jsonObject, path.resolve(outputDirectory, file.nameWithExtension), {
            ensureFolderExists: true,
            updateExistingFile: true
          });
        }
      }
    });
  })
  .catch(error => {
    console.log(error);
  });

function checkStatus(res: Response) {
  if (res.ok) {
    // res.status >= 200 && res.status < 300
    return res;
  } else {
    throw new Error(res.statusText);
  }
}
