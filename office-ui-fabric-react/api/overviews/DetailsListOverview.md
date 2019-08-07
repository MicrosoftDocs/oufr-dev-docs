---
title: Fabric DetailsList Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
DetailsList is a derivative of the [List](https:&#x2F;&#x2F;developer.microsoft.com&#x2F;en-us&#x2F;fabric#&#x2F;controls&#x2F;web&#x2F;list) component. It is a robust way to display an information rich collection of items. It can support powerful ways to aid a user in finding content with sorting, grouping and filtering. Lists are a great way to handle large amounts of content, but poorly designed Lists can be difficult to parse.

Use a DetailsList when density of information is critical. Lists can support single and multiple selection, as well as drag and drop and marquee selection. They are composed of a column header, which contains the metadata fields which are attached to the list items, and provide the ability to sort, filter and even group the list. List items are composed of selection, icon, and name columns at minimum. One can also include other columns such as Date Modified, or any other metadata field associated with the collection. Place the most important columns from left to right for ease of recall and comparison.

DetailsList is classically used to display files, but is also used to render custom lists that can be purely metadata. Avoid using file type icon overlays to denote status of a file as it can make the entire icon unclear. Be sure to leave ample width for each column’s data. If there are multiple lines of text in a column, consider the variable row height variant.

## My scrollable content isn&#39;t updating on scroll! What should I do?

Add the &#x60;data-is-scrollable&#x3D;&quot;true&quot;&#x60; attribute to your scrollable element containing the DetailsList.

By default, the List used within DetailsList will use the &#x60;BODY&#x60; element as the scrollable element. If you contain the List within a scrollable &#x60;DIV&#x60; using &#x60;overflow: auto&#x60; or &#x60;scroll&#x60;, the List needs to listen for scroll events on that element instead. On initialization, the List will traverse up the DOM looking for the first element with the &#x60;data-is-scrollable&#x60; attribute to know when element to listen to for knowing when to re-evaulate the visible window.

## My List is not re-rendering when I mutate its items! What should I do?

To determine if the List within DetailsList should re-render its contents, the component performs a referential equality check within its &#x60;shouldComponentUpdate&#x60; method.
This is done to minimize the performance overhead associating with re-rendering the virtualized List pages, as recommended by the [React documentation](https:&#x2F;&#x2F;reactjs.org&#x2F;docs&#x2F;optimizing-performance.html#the-power-of-not-mutating-data).

As a result of this implementation, the inner List will not determine it should re-render if the array values are mutated.
To avoid this problem, we recommend re-creating the items array backing the DetailsList by using a method such as &#x60;Array.prototype.concat&#x60; or ES6 spread syntax shown below:

&#x60;&#x60;&#x60;tsx
public appendItems(): void {
  const { items } &#x3D; this.state;

  this.setState({
    items: [...items, ...[&#39;Foo&#39;, &#39;Bar&#39;]]
  })
}

public render(): JSX.Element {
  const { items } &#x3D; this.state;

  return &lt;DetailsList items&#x3D;{items} &#x2F;&gt;;
}
&#x60;&#x60;&#x60;

By re-creating the items array without mutating the values, the inner List will correctly determine its contents have changed and that it should re-render the new values.



## Do &#10003;
- Use them to display content.
- Provide useful columns of metadata.
- Display columns in order of importance left to right or right to left depending on the standards of the culture.
- Give columns ample default width to display information.

## Don't &#10008;
- Use them to display commands or settings.
- Overload the view with too many columns that require excessive horizontal scrolling.
- Make columns so narrow that it truncates the information in typical cases.