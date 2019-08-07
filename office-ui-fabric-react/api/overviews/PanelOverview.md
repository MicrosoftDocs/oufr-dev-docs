# Overview
Panels are modal UI overlays that provide contextual app information. They often request some kind of creation or management action from the user. Panels are paired with the Overlay component, also known as a Light Dismiss. The Overlay blocks interactions with the app view until dismissed either through clicking or tapping on the Overlay or by selecting a close or completion action within the Panel.

## Examples of experiences that use Panels

- Member or group list creation or management
- Document list creation or management
- Permissions creation or management
- Settings creation or management
- Multi-field forms


## Do &#10003;
- Use for self-contained experiences where the user does not need to interact with the app view to complete the task.
- Use for complex creation, edit or management experiences.
- Consider how the panel and its contained contents will scale across Fabric’s responsive web breakpoints.
- Make sure to have a minimum width of 340px for the `Panel` component


## Don't &#10008;
- Use for experiences where the user needs to interact with the app view.