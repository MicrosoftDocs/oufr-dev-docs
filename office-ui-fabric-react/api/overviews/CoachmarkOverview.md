---
title: Fabric Coachmark Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

# Overview
Coachmarks are used to draw a persons attention to a part of the UI, and increase engagement with that element
in the product.

They should be contextual whenever possible, or related to something that will make existing user flows more efficient.


## Do &#10003;
- Only one Coachmark + TeachingBubble combo should be displayed at a time
- Coachmarks can be stand alone or sequential. Sequential Coachmarks should be used sparingly, to walk through complex multi-step interactions. It is recommended that a sequence of Coachmarks does not exceed 3 steps.
- Coachmarks are designed to only hold TeachingBubbles
- Provide descriptive text in the &#x60;ariaDescribedByText&#x60; prop to let accessibility impaired users know how to open&#x2F;access the Coachmark with keyboard controls. (See example in documentation)
- The keyboard shortcut for opening the Coachmark is &#x60;Alt + C&#x60;
- Consider when the Coachmark loads on-screen: the default value &#x60;delayBeforeCoachmarkAnimation&#x60; is set to 0, but you can increase this number to delay when the coachmark is displayed. Adding a delay can make the Coachmark stand out more, so consider scenario needs and page load times when adjusting this number. A delay that&#39;s 2-4 seconds is recommended if you choose to use one.

## Don't &#10008;
- Coachmark size, color, and animation should not be altered.
- Don&#39;t show the coachmark more than once even if the user has not completed the action.