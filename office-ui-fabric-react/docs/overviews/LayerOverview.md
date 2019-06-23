# Overview
A Layer is a technical component that does not have specific Design guidance.

Layers are used to render content outside of a DOM tree, at the end of the document. This allows content to escape traditional boundaries caused by &quot;overflow: hidden&quot; css rules and keeps it on the top without using z-index rules. This is useful for example in ContextualMenu and Tooltip scenarios, where the content should always overlay everything else.

There are some special considerations. Due to the nature of rendering content elsewhere asynchronously, React refs within content will not be resolvable synchronously at the time the Layer is mounted. Therefore, to use refs correctly, use functional refs &#x60;ref&#x3D;{ (el) &#x3D;&gt; { this._root &#x3D; el; }&#x60; rather than string refs &#x60;ref&#x3D;&#39;root&#39;&#x60;. Additionally measuring the physical Layer element will not include any of the children, since it won&#39;t render it. Events that propgate from within the content will not go through the Layer element as well.


## Do &#10003;
- Use functional refs: &#x60;ref&#x3D;{ (el) &#x3D;&gt; { this._root &#x3D; el; }&#x60;


## Don't &#10008;
- Use string refs: &#x60;ref&#x3D;&#39;root&#39;&#x60;
