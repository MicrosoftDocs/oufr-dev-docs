# Contributing

In order to make changes to the files generation logic follow the steps bellow for your inner loop.

## Local development setup

1. Clone the repo using the following command.

   ```
   git clone https://github.com/MicrosoftDocs/oufr-dev-docs.git
   ```

2. Install the main dependencies for the project to run.

   ```
   npm install
   ```

3. Install the latest versions of `office-ui-fabric-react` and `@uifabric/fabric-website`.  
   Note: this are not part of main dependency install run because we want the latest versions in the pipeline to generate most up to date docs. ️️⚠️ DO NOT COMMIT the changes in this step done to `package.json` and `package-lock.json` files.

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

## Local development flow

1. After running the steps above you are ready to go and make changes in the business logic and run only one command (with one exception described below) every time when you want to verify your changes:

   ```
   npm run local
   ```

   **_Exception:_** in case you make changes to the logic of downloading the `api.json` files located [here](https://github.com/MicrosoftDocs/oufr-dev-docs/blob/master/src/downloadApiFiles.ts) you will need to rerun steps 4 and 5 from the setup above and then `npm run local`.

   This command runs under the hood several other scripts so you might see some output in the console from different scripts being invoked.

   The end result of it will be tge documentation files outputted in the `office-ui-fabric-react` folder that relates to documentation itself and in the `config` folder that relates to the `api-documenter` config file.

   ❕**NOTE:** files generated are git ignored, so in order to be able to verify the changes to documentation files or the `api-documenter` config file that would result from your logic changes, you would need to comment out related lines in the `.gitignore` file before your changes and make the first run after which you should temporarily commit the generated files, ❗️❗️❗️ BUT ❗️❗️❗️ very important to remember to remove them along with un-commenting the `.gitignore` changes before pushing it to the remote. After the first run and committing the generated files, any subsequent run after any of your logic changes will be reflected in the git diff.

2. When you feel like your changes are good to be pushed to the remote repository, please don't forget to remove the generated files and revert the changes in the `.gitignore` file described in the `NOTE` paragraph above.

   After doing that, you can push changes to the master and you will be able to see the [pipeline](https://uifabric.visualstudio.com/fabricpublic/_build?definitionId=107) described [here](PIPELINE_FLOW.md) triggered and after a successful [release](https://uifabric.visualstudio.com/fabricpublic/_release?_a=releases&view=mine&definitionId=1) deployment, a DocFX publish build will be triggered that can be accessed on their [portal](https://ops.microsoft.com/#/). To be able to access the `oufr-dev-docs` DocFX publish results you most likely will need to sign in with your Github account and also be added as a contributor or repository owner to this repository. It's an important part in verifying if your changes are validated against their strict formatting of yaml and markdown files that are published.

   To verify your changes on the `docs.microsoft` portal you can navigate to the published `staging` branch following [this link](https://review.docs.microsoft.com/en-us/javascript/api/getstarted/getstartedpage?view=office-ui-fabric-react-latest&branch=staging) right after the DocFX publish build has successfully finished. This branch is available to Microsoft employees only and is not going to the `live` branch that is publicly available until next morning after a scheduled run. So make sure at the end of the day you have something that can be published and it looks nice 😊.
