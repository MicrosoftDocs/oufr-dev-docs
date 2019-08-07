---
title: Fabric Spinner Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
A Spinner is an outline of a circle which animates around itself indicating to the user that things are processing. A Spinner is shown when it&#39;s unsure how long a task will take making it the indeterminate version of a ProgressIndicator. They can be various sizes, located inline with content or centered. They generally appear after an action is being processed or committed. They are subtle and generally do not take up much space, but are transitions from the completed task.


## Do &#10003;
- Use a Spinner when a task is not immediate.
- Use one Spinner at a time.
- Descriptive verbs are appropriate under a Spinner to help the user understand what&#39;s happening. Ie: Saving, processing, updating.
- Use a Spinner when confirming a change has been made or a task is being processed.

## Don't &#10008;
- Don’t use a Spinner when performing immediate tasks.
- Don&#39;t show multiple Spinners at the same time.
- Don&#39;t include more than a few words when paired with a Spinner.