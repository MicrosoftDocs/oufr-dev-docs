---
title: Fabric Dialog Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

# Overview
Dialogs are temporary, modal UI overlay that generally provide contextual app information or require user confirmation/input. In most cases, Dialogs block interactions with the web page or application until being explicitly dismissed, and often request action from the user. They are primarily used for lightweight creation or edit tasks, and simple management tasks.


## Do &#10003;
- Use Dialogs for quick, actionable interactions, such as making a choice or needing the user to provide information.
- When possible, try a non-blocking Dialog before resorting to a blocking Dialog.
- Only include information needed to help users make a decision.
- Button text should reflect the actions available to the user (e.g. save, delete).
- Validate that the user's entries are acceptable before closing the Dialog. Show an inline validation error near the field they must correct.

## Don't &#10008;
- Don’t overuse Dialogs. To some extent they can be perceived as interrupting workflow, and too many can be a bad user experience.
- Avoid "Are you sure?" or confirmation Dialogs unless the user is making an irreversible or destructive choice.
- Do not use a blocking Dialog unless absolutely necessary because they are very disruptive.
- Don’t have long sentences or complicated choices.
- Avoid generic button labels like "Ok" if you can be more specific about the action a user is about to complete.
- Don't dismiss the Dialog if underlying problem is not fixed. Don't put the user back into a broken/error state.
- Don't provide the user with more than 3 buttons.