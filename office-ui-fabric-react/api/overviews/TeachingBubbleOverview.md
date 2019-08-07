# Overview
TeachingBubbles are a special kind of [Callout](https://developer.microsoft.com/en-us/fabric#/controls/web/callout) used to prominently display important hints to a specific part of a page. They should be used to educate the user about an element that may be easy to miss, such as a new feature or option in the UI. Because they increase engagement with a part of the UI, they are often paired with [Coachmarks](https://developer.microsoft.com/en-us/fabric#/controls/web/coachmark).

TeachingBubbles are usually invoked by a system change rather than a user action, so they should generally not be used to show supplemental information or helper text. This is better suited for Callouts or [Tooltips](https://developer.microsoft.com/en-us/fabric#/controls/web/tooltip), which are used to simplify interactions. TeachingBubbles should be used to temporarily highlight a feature and should only be shown for a limited time; they should not be permanent parts of a UX.

TeachingBubbles should otherwise follow the same usage guidance as Callouts.



## Do &#10003;
- Use TeachingBubbles to draw attention to new or important features.
- Use TeachingBubbles for actions invoked by the system, like a new capability being available.
- TeachingBubbles can be used in a sequence to illustrate a flow or series of features.
- Use TeachingBubbles for a limited time, usually while a feature is considered "new".
- Show one TeachingBubble at a time.


## Don't &#10008;
- Don't use TeachingBubbles when a Callout would be sufficient.
- Don't use TeachingBubbles for user-invoked actions, such as clicking on a button or interacting with a UI element.
- Don't continue to show a TeachingBubble once it's been show to the user, even if they have not completed the desired action.
- Don't use TeachingBubbles for permanent parts of a UX.
