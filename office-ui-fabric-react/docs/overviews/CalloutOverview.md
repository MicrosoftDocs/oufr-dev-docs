# Overview
Callouts are a powerful way to simplify a user interface. They host tips and other information users need when they need it, with minimal effort on their part. Callouts can help you use screen space more effectively and reduce screen clutter. However, poorly designed Callouts can be annoying, distracting, unhelpful, overwhelming, or in the way.

Use a Callout for displaying additional contextual information about an item on the screen. Callouts also have a tail that identifies their source. A common use for Callout is the introduction of a new feature or capability of an app or site. Alternate usages include pairing the Callout with a button or clickable element for on-demand presentation of additional or supporting content.

Real-world examples of this implementation can be seen in administrative interfaces where a particularly difficult-to-understand concept is paired with the iconClassNames.info &quot;i&quot; icon. In this example, Callout - with its tip text - is opened when the user clicks on or hovers over the icon.

# Best Practices

## Do &#10003;
- Use Callouts to introduce new concepts in an experience where highlighting specific pieces of the UI is necessary.
- Do be concise with the information you provide inside of a Callout. Short sentences or sentence fragments are best.
- Do be helpful with the tip text inside of your Callout.
- Do limit the information inside of a Callout to supplemental information that users don&#39;t have to read.
- Callouts should be placed near the object being described, usually at the pointer&#39;s tail or head if possible.
- When additional context - or more advanced description - is necessary, consider placing a link to &quot;Learn more&quot; at the bottom of the Callout and opening the additional content in a new window or Panel when clicked.

## Don't &#10008;
- Don’t overuse Callout without putting the user in control. Too many Callouts which open automatically can be perceived as interrupting workflow and are a bad user experience.
- Don&#39;t use large, unformatted blocks of text in your Callout, they are difficult to read and overwhelming.
- Don&#39;t put obvious tip text, or text that simply repeats what is already on the screen in your Callout.
- Because the content inside of a Callout isn&#39;t always visible, don&#39;t put important or required information in a Callout.
- Don’t block important UI with the placement of your Callout, it is a poor user experience that will lead to frustration.
- Don’t open Callout from within another Callout.
- Don’t use Callout to ask the user to confirm an action, use a Dialog instead.
- Don’t show Callouts on hidden elements.