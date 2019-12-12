---
title: Fabric Stack Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
A &#x60;Stack&#x60; is a container-type component that abstracts the implementation of a flexbox in order to define the layout of its children components.

## Stack Properties

Although the &#x60;Stack&#x60; component has a number of different properties, there are three in particular that define the overall layout that the component has:

1. Direction: Refers to whether the stacking of children components is horizontal or vertical. By default the &#x60;Stack&#x60; component is vertical, but can be turned horizontal by adding the &#x60;horizontal&#x60; property when using the component.
2. Alignment: Refers to how the children components are aligned inside the container. This is controlled via the &#x60;verticalAlign&#x60; and &#x60;horizontalAlign&#x60; properties. One thing to notice here is that while flexbox containers align always across the cross axis, &#x60;Stack&#x60; aims to remove the mental strain involved in this process by making the &#x60;verticalAlign&#x60; and &#x60;horizontalAlign&#x60; properties always follow the vertical and horizontal axes, respectively, regardless of the direction of the &#x60;Stack&#x60;.
3. Spacing: Refers to the space that exists between children components inside the &#x60;Stack&#x60;. This is controlled via the &#x60;gap&#x60; and &#x60;verticalGap&#x60; properties.

# Stack Items

The &#x60;Stack&#x60; component provides an abstraction of a flexbox container but there are some flexbox related properties that are applied on specific children of the flexbox instead of being applied on the container. This is where &#x60;Stack Items&#x60; comes into play.

A &#x60;Stack Item&#x60; abstracts those properties that are or can be specifically applied on flexbox&#39;s children, like &#x60;grow&#x60; and &#x60;shrink&#x60;.

To use a &#x60;Stack Item&#x60; in an application, the &#x60;Stack&#x60; component should be imported and &#x60;Stack.Item&#x60; should be used inside of a &#x60;Stack&#x60;. This is done so that the existence of the &#x60;Stack Item&#x60; is inherently linked to the &#x60;Stack&#x60; component.

## Stack Wrapping

Aside from the previously mentioned properties, there is another property called &#x60;wrap&#x60; that determines if items overflow the &#x60;Stack&#x60; container or wrap around it. The wrap property only works in the direction of the &#x60;Stack&#x60;, which means that the children components can still overflow in the perpendicular direction (i.e. in a &#x60;Vertical Stack&#x60;, items might overflow horizontally and vice versa).

## Stack Nesting

&#x60;Stacks&#x60; can be nested inside one another in order to be able to configure the layout of the application as desired.



## Do &#10003;
- Use anywhere you would use flexbox.
- Take into account that Stack functionality will degrade if used on non-supported browsers.
- Take into account that wrapping only works in the direction of the Stack.
- Use StackItems to apply Stack properties to children components.


## Don't &#10008;
Coming soon...