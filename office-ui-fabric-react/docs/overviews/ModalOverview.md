# Overview
Modals are temporary, modal UI overlay that generally provide contextual app information or require user confirmation&#x2F;input, or can be used to advertise new app features. In some cases, Modals block interactions with the web page or application until being explicitly dismissed. They can be used for lightweight creation or edit tasks and simple management tasks, or for hosting heavier temporary content.

For usage requiring a quick choice from the user, [Dialog](#&#x2F;controls&#x2F;web&#x2F;dialog) may be a more appropriate control.


# Best Practices

## Do &#10003;
- Use Modals for actionable interactions, such as needing the user to provide information or change settings.
- When possible, try a non-blocking Modal before resorting to a blocking Modal.
- Always have at least one focusable element inside a Modal.


## Don't &#10008;
- Don’t overuse Modals. In some cases they can be perceived as interrupting workflow, and too many can be a bad user experience.