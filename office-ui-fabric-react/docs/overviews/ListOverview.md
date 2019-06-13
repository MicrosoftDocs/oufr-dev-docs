# Overview
List provides a base component for rendering large sets of items. It is agnostic of layout, the tile component used, and selection management. These concerns can be layered separately.

**Performance is important, and DOM content is expensive. Therefore, limit what you render.** List applies this principle by using UI virtualization. Unlike a simple &#x60;for&#x60; loop that renders all items in a set, a List only renders a subset of items, and as you scroll around, the subset of rendered content is shifted. This gives a much better experience for large sets, especially when the per-item components are complex&#x2F;render-intensive&#x2F;network-intensive.

List breaks down the set of items passed in into pages. Only pages within a &quot;materialized window&quot; are actually rendered. As that window changes due to scroll events, pages that fall outside that window are removed, and their layout space is remembered and pushed into spacer elements. This gives the user the experience of browsing massive amounts of content but only using a small number of actual elements. This gives the browser much less layout to resolve, and gives React DOM diffing much less content to worry about.

Note: if &#x60;onRenderCell&#x60; is not provided in &#x60;IListProps&#x60;, the List will attempt to render the &#x60;name&#x60; property for each object in the &#x60;items&#x60; array.

## My scrollable content isn&#39;t updating on scroll! What should I do?

Add the &#x60;data-is-scrollable&#x3D;&quot;true&quot;&#x60; attribute to your scrollable element containing the List.

By default, List will use the &#x60;&lt;body&gt;&#x60; element as the scrollable element. If you contain the List within a scrollable &#x60;&lt;div&gt;&#x60; using &#x60;overflow: auto&#x60; or &#x60;scroll&#x60;, the List needs to listen for scroll events on that element instead. On initialization, the List will traverse up the DOM looking for the first element with the &#x60;data-is-scrollable&#x60; attribute to know which element to listen to for knowing when to re-evaulate the visible window.

## My List is not re-rendering when I mutate its items! What should I do?

To determine if the List should re-render its contents, the component performs a referential equality check on the &#x60;items&#x60; array in its &#x60;shouldComponentUpdate&#x60; method. This is done to minimize the performance overhead associating with re-rendering the virtualized List pages, as recommended by the [React documentation](https:&#x2F;&#x2F;reactjs.org&#x2F;docs&#x2F;optimizing-performance.html#the-power-of-not-mutating-data).

As a result of this implementation, the List will not determine it should re-render if values _within_ the array are mutated. To avoid this problem, we recommend re-creating the &#x60;items&#x60; array using a method such as &#x60;Array.prototype.concat&#x60; or ES6 spread syntax shown below:

&#x60;&#x60;&#x60;tsx
public appendItems(): void {
  const { items } &#x3D; this.state;

  this.setState({
    items: [...items, ...[{ name: &#39;Foo&#39; }, { name: &#39;Bar&#39; }]]
  })
}

public render(): JSX.Element {
  const { items } &#x3D; this.state;

  return &lt;List items&#x3D;{items} &#x2F;&gt;;
}
&#x60;&#x60;&#x60;

Since the &#x60;items&#x60; array has been re-created, the List will conclude that its contents have changed and it should re-render the new values.



# Best Practices

## Do &#10003;
Coming soon...

## Don't &#10008;
Coming soon...