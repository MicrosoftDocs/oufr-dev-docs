---
title: Fabric MessageBar Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
A banner (&#x60;MessageBar&#x60;) displays errors, warnings, or important information about an open app or file. For example, if a file failed to upload an error message bar should appear.



## Do &#10003;
- Place the message bar near the top of the relevant view, in a highly visible but unobtrusive location.
- Keep the text very brief. Be succinct and your users are more likely to read everything you say.
- Consider how localization may affect the message. Translation to other languages may add up to 33% more characters to the string length.
- Use the right variant for the type and urgency of the particular message (see variants)


## Don't &#10008;
- Don’t use paragraphs, long sentences, or special formatting in a MessageBar. The control tries to grow to accommodate all the text and will just result in pushing the user’s main content too low on the view.
- Don’t use buttons when a subtler link will suffice. Reserve the usage of button for when the MessageBar has a single ”hero” action that has vital usefulness to the user at that particular moment. Using more than one button is discouraged.
- Don&#39;t overuse message bars, or load a page with multiple message bars because each MessageBar is read out loud by screen readers.
