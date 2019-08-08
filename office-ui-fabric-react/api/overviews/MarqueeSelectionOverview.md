---
title: Fabric MarqueeSelection Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
The MarqueeSelection component provides a service which allows the user to drag a rectangle to be drawn around
items to select them. This works in conjunction with a selection object, which can be used to generically store selection state, separate from a component that consumes the state.

MarqueeSelection also works in conjunction with the AutoScroll utility to automatically scroll the container when we drag a rectangle within the vicinity of the edges.

When a selection rectangle is dragged, we look for elements with the **data-selection-index** attribute populated. We get these elements&#39; boundingClientRects and compare them with the root&#39;s rect to determine selection state. We update the selection state appropriately.

In virtualization cases where items that were once selected are dematerialized, we will keep the item in its
previous state until we know definitively if it&#39;s on&#x2F;off. (In other words, this works with List.)



## Do &#10003;
Coming soon...

## Don't &#10008;
Coming soon...