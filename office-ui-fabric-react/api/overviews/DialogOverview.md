---
title: Fabric Dialog Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
A dialog box (&#x60;Dialog&#x60;) is a temporary pop-up that takes focus from the page or app and requires people to interact with it. It’s primarily used for confirming actions, such as deleting a file, or asking people to make a choice.  



## Do &#10003;
- Use Dialogs for quick, actionable interactions, such as making a choice or needing the user to provide information.
- When possible, try a non-blocking Dialog before resorting to a blocking Dialog.
- Only include information needed to help users make a decision.
- Button text should reflect the actions available to the user (e.g. save, delete).
- Validate that the user&#39;s entries are acceptable before closing the Dialog. Show an inline validation error near the field they must correct.


## Don't &#10008;
- Don’t overuse Dialogs. To some extent they can be perceived as interrupting workflow, and too many can be a bad user experience.
- Avoid &quot;Are you sure?&quot; or confirmation Dialogs unless the user is making an irreversible or destructive choice.
- Do not use a blocking Dialog unless absolutely necessary because they are very disruptive.
- Don’t have long sentences or complicated choices.
- Avoid generic button labels like &quot;Ok&quot; if you can be more specific about the action a user is about to complete.
- Don&#39;t dismiss the Dialog if underlying problem is not fixed. Don&#39;t put the user back into a broken&#x2F;error state.
- Don&#39;t provide the user with more than 3 buttons.
