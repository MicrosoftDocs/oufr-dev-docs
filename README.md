[![Build Status](https://dev.azure.com/uifabric/fabricpublic/_apis/build/status/OUFR-dev-docs%20Update?branchName=master)](https://dev.azure.com/uifabric/fabricpublic/_build/latest?definitionId=107&branchName=master)

[![Release Status](https://vsrm.dev.azure.com/uifabric/_apis/public/Release/badge/cd9e4e13-b8db-429a-9c21-499bf1c98639/1/1)](https://dev.azure.com/uifabric/fabricpublic/_release?view=all&definitionId=1)

## Microsoft Open Source Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

<hr>

# oufr-dev-docs - [Fabric](https://github.com/OfficeDev/office-ui-fabric-react) docs repository

This repo is setup in a way so that we can split the business logic of generating the docs files from the actual generated files. This was done by keeping these two concerns on different branches. `master` branch holds all the business logic; `staging` and `live` branches are auto updated by a scheduled pipeline with the docs generated in the pipeline by using the master branch.

## Local development flow

1. Clone the repo using the following command.

   ```
   git clone https://github.com/MicrosoftDocs/oufr-dev-docs.git
   ```

2. Install the main dependencies for the project to run.

   ```
   npm install
   ```

3. Install the latest versions of `office-ui-fabric-react` and `@uifabric/fabric-website`.  
   Note: this are not part of main dependency install run because we want the latest versions in the pipeline to generate most up to date docs. DO NOT COMMIT the changes in this step done to `package.json` and `package-lock.json` files.

   ```
   npm run install-deps
   ```

4. Run the initial build command which is necessary for the next step.

   ```
   npm run build
   ```

5. Following step needs to be run only once when starting local developer work. This will download all `api.json` files and save them in the `input` folder that is not tracked by git so it does not need to be committed during development.
   ```
   npm run download-api-files
   ```
