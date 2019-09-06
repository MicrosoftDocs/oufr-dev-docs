# Pipeline flow

The flow of auto updating the documentation consists of 2 stages and is set to happen on a scheduled basis from Monday to Friday at 8:00am. Here is a detailed overview of how it happens:

1. The build definition yaml file is located [here](https://github.com/MicrosoftDocs/oufr-dev-docs/blob/master/config/azure-pipelines/update-docs.yaml) and is basically the starting point of the automation pipeline (stage 1) that contains the schedule trigger and all necessary steps to generate the documentation files and publish them as an Azure build artifact. [Here](https://uifabric.visualstudio.com/fabricpublic/_build?definitionId=107) is where that build definition gets consumed and runs the automation. An overview of what happens during this build can be represented with these steps:

   - First few tasks are just to setup the environment like:

     1. `npm install`
     2. `npm install --save-dev office-ui-fabric-react @uifabric/fabric-website` used to get some documentation that is published with these packages
     3. `npm run build`

   - Next task is simply extracting the version of the `office-ui-fabric-react` package and write it to a file that is going to be used later to help keep track of update history.

   - We download all the `api.json` files that are uploaded to an Azure blob storage every time a release of the Fabric packages happen. These are the core files that the documentation gets generated from.

   - Before generating the main yaml files that are outputted by the `api-ducumenter` in the next step we need to generate a config file for it that will represent the navigation structure on the left side that mirrors the one of the Fabric website. During this steps we also generate some overview and example files for each Fabric control and also the GetStartedPage and ResourcesPage. The gist of what happens during this step is:

     1. Create the GetStartedPage and the ResourcesPage by glueing several markdown files for each from the fabric-website package that we installed during the setup step.
     2. Create Overview markdown files for each fabric control that are again the result of glueing the Dos, Donts and Overview markdown files that we get from the office-ui-fabric-react package that we installed during the setup step.
     3. Create some example files for each fabric control that are simply some iframe windows to the deploy links that are generated after each successful PR merge into Fabric repo.
     4. Create the config file that is consumed by the `api-documenter` that will include the above mentioned created files and also provide a defined structure of how the API items should be filtered during the next step.

   - Run the `api-documenter` now that we have teh `api.json` files and the config file ready. This will output to a specified directory all API yaml files plus a `toc.yml` file that is generated following the structure of the config file we provided.

   - Next few steps are just gathering all the generated files and publish them as build artifacts that we will consume them in the next stage of the automation process.

2. The release pipeline is located [here](https://uifabric.visualstudio.com/fabricpublic/_release?_a=releases&view=mine&definitionId=1) and represents the `stage 2` that is nothing more than saving the new generated files in the first stage to the corresponding branches of the `oufr-dev-docs` repository. Here is what happens in parallel for the `staging` and `live` branches:

   - Download the build artifacts from the first stage (once in the beginning).

   - Delete the old documentation files from their final location (same for each branch).

   - Copy the downloaded files into the location we cleaned up in the previous step (same for each branch).

   - Add a new line in the `FABRIC-VERSION` file to mark the version of the office-ui-fabric-react package used in this run. This is done for history reasons plus to avoid an error in the next step when there are no changes to commit (same for each branch).

   - Commit the changes (same for each branch).

   - Push the changes to the remote repository (same for each branch).
