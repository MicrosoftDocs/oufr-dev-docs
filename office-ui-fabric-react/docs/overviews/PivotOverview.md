# Overview
The Pivot control and related tabs pattern are used for navigating frequently accessed, distinct content categories. Pivots allow for navigation between two or more content views and relies on text headers to articulate the different sections of content.

- Tapping on a pivot item header navigates to that header&#39;s section content.

Tabs are a visual variant of Pivot that use a combination of icons and text or just icons to articulate section content.



## Do &#10003;
- Use on content-heavy pages that require a significant amount of scrolling to access the various sections.
- Be concise on the navigation labels, ideally one or two words rather than a phrase.
- Make sure all the children of the Pivot component are of type PivotItem.


## Don't &#10008;
- Don’t use on pages which don’t scroll.
- Don’t use the Pivot to link to a new page.
- Don’t use the Pivot to link to hidden content.
- Don’t pass any children of type other than PivotItem to the Pivot component.
