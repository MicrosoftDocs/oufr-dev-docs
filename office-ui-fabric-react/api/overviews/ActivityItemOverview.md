---
title: Fabric ActivityItem Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
An activity item (&#x60;ActivityItem&#x60;) represents a person&#39;s actions, such as making a comment, mentioning someone with an @mention, editing a document, or moving a file. 



## Do &#10003;
- Use a list of multiple ActivityItems to indicate a history of events relating to a single file, folder, user, or other entity. Alternatively, use a single ActivityItem to indicate the most recent event on an entity.
- Group multiple similar events occuring near the same time into single ActivityItems.


## Don't &#10008;
- Use ActivityItems to render large amounts of body text; they are meant to be concise descriptions of a specific activity.
