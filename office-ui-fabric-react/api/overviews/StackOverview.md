---
title: Fabric Stack Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

# Overview
A Stack is a container-type component that abstracts the implementation of a flexbox in order to define the layout of its children components.

## Stack Properties

Although Stack has a number of different properties, there are three in particular that define the overall layout that the component has:

1. Direction: Refers to whether the stacking of children components is horizontal or vertical. By default the Stack component is vertical, but can be turned horizontal by adding the &#x60;horizontal&#x60; property when using the component.
2. Alignment: Refers to how the children components are aligned inside the container. This is controlled via the &#x60;verticalAlign&#x60; and &#x60;horizontalAlign&#x60; properties. One thing to notice here is that while flexbox containers align always across the cross axis, Stack aims to remove the mental strain involved in this process by making the &#x60;verticalAlign&#x60; and &#x60;horizontalAlign&#x60; properties always follow the vertical and horizontal axes, respectively, regardless of the direction of the Stack.
3. Spacing: Refers to the space that exists between children components inside the Stack. This is controlled via the &#x60;gap&#x60; and &#x60;verticalGap&#x60; properties.

## Stack Wrapping

Aside from the previously mentioned properties, there is another property called &#x60;wrap&#x60; that determines if items overflow the Stack container or wrap around it. The wrap property only works in the direction of the Stack, which means that the children components can still overflow in the perpendicular direction (i.e. in a Vertical Stack, items might overflow horizontally and vice versa).

## Stack Nesting

Stacks can be nested inside one another in order to be able to configure the layout of the application as desired.



## Do &#10003;
- Use anywhere you would use flexbox.
- Take into account that Stack functionality will degrade if used on non-supported browsers.
- Take into account that wrapping only works in the direction of the Stack.
- Use StackItems to apply Stack properties to children components.


## Don't &#10008;
Coming soon...