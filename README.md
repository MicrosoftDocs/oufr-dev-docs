[![Build Status](https://dev.azure.com/uifabric/fabricpublic/_apis/build/status/OUFR-dev-docs%20Update?branchName=master)](https://dev.azure.com/uifabric/fabricpublic/_build/latest?definitionId=107&branchName=master)

[![Release Status](https://vsrm.dev.azure.com/uifabric/_apis/public/Release/badge/cd9e4e13-b8db-429a-9c21-499bf1c98639/1/1)](https://dev.azure.com/uifabric/fabricpublic/_release?view=all&definitionId=1)

## Microsoft Open Source Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

<hr>

# [office-ui-fabric-react](https://github.com/OfficeDev/office-ui-fabric-react) documentation repository

## Overview

This repository provides the necessary documentation files that are published by the DocFX pipeline to Microsoft Docs, resulting in an API reference along with some overview and examples documentation for the Fabric React controls library. You can see the end result [here](https://docs.microsoft.com/en-us/javascript/api/getstarted/getstartedpage?view=office-ui-fabric-react-latest).

## Repository structure

The repo setup is done in a way so that the business logic of generating the documentation files is separated from the actually generated files. The main reason of this is to keep a clean git history and also relative to the changes that will occur often (daily) for the documentation part and only occasionally for the implementation code part. This is achieved by keeping these two concerns on different branches. `main` branch holds all the business logic and `staging` with `live` branches are auto updated in parallel by a scheduled task with the files generated from using the implementation code on the `main` branch.

## Automation pipeline

To understand better what the scheduled task is doing, [here](dev-docs/PIPELINE_FLOW.md) is a detailed walk-through of all the stages and their steps. Additionally, the business logic code has a considerable amount of comments throughout all the files.

## Contributing

⚠️⚠️⚠️ This repo is automatically updating its `live` and `staging` branches, so submitting documentation fixes will not be helpful because the next day after the automation pipeline updates the files again your changes would be discarded. Instead, recommended way of submitting fixes is to go and submit a PR directly in the Fabric repository here: [office-ui-fabric-react](https://github.com/OfficeDev/office-ui-fabric-react). Same thing in regards to submitting issues. Because the repo is auto updating itself, the issues backlog is almost never checked by any developer, so instead go and submit an issue in the Fabric issue backlog.

The `main` branch contains only the generation of documentation files logic so any changes there need to be done very careful and with the according approval of repo maintainers. In case you consider that your changes will improve in any way the generation logic [here](dev-docs/CONTRIBUTING.md) is some helpful tips on how to setup the working environment.
