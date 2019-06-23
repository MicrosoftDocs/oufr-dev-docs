# Overview
Toggles represent a physical switch that allows users to turn things on or off. Use Toggles to present users with two mutually exclusive options (like on&#x2F;off), where choosing an option results in an immediate action. Use a Toggle for binary operations that take effect right after the user flips the Toggle. For example, use a Toggle to turn services or hardware components on or off. In other words, if a physical switch would work for the action, a Toggle is probably the best control to use.

## Choosing between Toggle and Checkbox

For some actions, either a Toggle or a Checkbox might work. To decide which control would work better, follow these tips:

- Use a Toggle for binary settings when changes become effective immediately after the user changes them.
- In the above example, it&#39;s clear with the Toggle that the wireless is set to &quot;On.&quot; But with the Checkbox, the user needs to think about whether the wireless is on now or whether they need to check the box to turn wireless on.
- Use a Checkbox when the user has to perform extra steps for changes to be effective. For example, if the user must click a &quot;Submit&quot;, &quot;Next&quot;, &quot;Ok&quot; button to apply changes, use a Checkbox.


## Do &#10003;
- Only replace the On and Off labels if there are more specific labels for the setting. If there are short (3-4 characters) labels that represent binary opposites that are more appropriate for a particular setting, use them. For example, you might use &quot;Show&#x2F;Hide&quot; if the setting is &quot;Show images.&quot;
- Let the label serve as the aria-label for the Toggle if possible. If necessary, set an aria-label that describes the ON action of the Toggle (e.g., Show images) and let the metadata (i.e., aria-checked) tell the screen reader the state.


## Don't &#10008;
- Don’t use a Toggle if the user will have to do something else or go somewhere else in order to experience its effect. If any extra step is required for changes to be effective, you should use a checkbox and corresponding &quot;Apply&quot; button instead of a Toggle.