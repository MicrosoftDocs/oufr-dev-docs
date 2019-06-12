# Overview
Allows you to render a set of items as multiple lists with various grouping properties.

## My List is not re-rendering when I mutate its items! What should I do?

To determine if the List within GroupedList should re-render its contents, the component performs a referential equality check within its &#x60;shouldComponentUpdate&#x60; method.
This is done to minimize the performance overhead associating with re-rendering the virtualized List pages, as recommended by the [React documentation](https:&#x2F;&#x2F;reactjs.org&#x2F;docs&#x2F;optimizing-performance.html#the-power-of-not-mutating-data).

As a result of this implementation, the inner List will not determine it should re-render if the array values are mutated.
To avoid this problem, we recommend re-creating the items array backing the GroupedList by using a method such as &#x60;Array.prototype.concat&#x60; or ES6 spread syntax shown below:

&#x60;&#x60;&#x60;tsx
public appendItems(): void {
  const { items } &#x3D; this.state;

  this.setState({
    items: [...items, ...[&#39;Foo&#39;, &#39;Bar&#39;]]
  })
}

public render(): JSX.Element {
  const { items } &#x3D; this.state;

  return &lt;GroupedList items&#x3D;{items} &#x2F;&gt;;
}
&#x60;&#x60;&#x60;

By re-creating the items array without mutating the values, the inner List will correctly determine its contents have changed and that it should re-render the new values.



# Best Practices

## Do &#10003;
Coming soon...

## Don't &#10008;
Coming soon...