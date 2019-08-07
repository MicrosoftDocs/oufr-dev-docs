---
title: Fabric ScrollablePane Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

# Overview
ScrollablePane is a helper component designed to use in conjunction with a Sticky component.  Sticky components will "stick" to the top or bottom of a ScrollablePane's scrollable region and remain visible.  ScrollablePane requires a height or max-height set either on the component itself, or on the immediate parent element.


## Do &#10003;
- ScrollablePane uses `position: absolute`.  Ensure that the parent element has an explicit `height` and `position: relative`, or has space already allocated for ScrollablePane (e.g: flexbox).
- Use Sticky component on block level elements
- Sticky component are ideally section headers and/or footers
- Ensure that the total height of Sticky components do not exceed the height of the ScrollablePane

## Don't &#10008;
- Don't use Sticky on elements with `margin-top` or `margin-bottom`