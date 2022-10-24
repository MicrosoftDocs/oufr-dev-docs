import { JsonFile } from '@microsoft/node-core-library';
import fetch, { Response } from 'node-fetch';
import * as path from 'path';
import { parseString } from 'xml2js';

const [nodePath, scriptPath, filesOutputPath, env]: Array<string | undefined> = process.argv;

if (!filesOutputPath) {
  throw new Error('Must specify api.json files output path as the first argument to this script');
}

if (!path.isAbsolute(filesOutputPath) && env !== 'local') {
  throw new Error('The api.json files output path must be absolute');
}

const outputDirectory = path.resolve(filesOutputPath);

// urls for every api.json file to fetch
const fileUrlsList: string[] = [];
// helper objects containing the name and the name with the file extension of the api.json files
const fileNamesList: Array<{ nameWithExtension: string; name: string }> = [];

// Fetching a list of blob containers in xml format.
// If this is not working a possible cause could be because Fabric team changed the blob container name or stopped uploading the files.
fetch('https://fabricweb.blob.core.windows.net/fabric?restype=container&comp=list&prefix=api-json')
  .then(checkStatus)
  .then(res => res.text()) // transform the xml to a string
  .then(body => {
    // an array of fetch promises for every api.json file
    const fetchPromises: Array<Promise<Response>> = [];

    // body here is a string of the xml response that will be return the result being a json object representation of it.
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
    // returning all api.json files fetch promises
    return Promise.all(fetchPromises);
  })
  .then(responses => {
    const responseToJsonPromises: Array<Promise<any>> = [];

    responses.forEach(response => {
      // building an array of promises that transform the responses after fetching all the files to json objects to be written on disk.
      responseToJsonPromises.push(response.json());
    });

    return Promise.all(responseToJsonPromises);
  })
  .then(jsonObjects => {
    // take every json object and along with some helper info extracted ahead write the json files on disk.
    jsonObjects.forEach(jsonObject => {
      for (let i = 0, l = fileNamesList.length; i < l; i++) {
        const file = fileNamesList[i];
        const nameParts = jsonObject['name'].split('/');
        const name = nameParts[nameParts.length - 1]

        // for now disabling date-time because it messes up some TOC items for OUFR package
        // because they both export interfaces with the same name.
        if (name === file.name && file.name !== 'date-time') {
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
  // res.status >= 200 && res.status < 300
  if (res.ok) {
    console.log('Successfully fetched the blob container files list');
    return res;
  } else {
    throw new Error(res.statusText);
  }
}
