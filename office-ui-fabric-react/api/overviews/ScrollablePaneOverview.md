---
title: Fabric ScrollablePane Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
A scrollable pane (&#x60;ScrollablePane&#x60;) is a helper component that&#39;s used with the &#x60;Sticky&#x60; component. It will &quot;stick&quot; to the top or bottom of the scrollable region and remain visible.



## Do &#10003;
- ScrollablePane uses &#x60;position: absolute&#x60;. Ensure that the parent element has an explicit &#x60;height&#x60; and &#x60;position: relative&#x60;, or has space already allocated for ScrollablePane (e.g: flexbox).
- Use Sticky component on block level elements
- Sticky component are ideally section headers and&#x2F;or footers
- Ensure that the total height of Sticky components do not exceed the height of the ScrollablePane


## Don't &#10008;
- Don&#39;t use Sticky on elements with &#x60;margin-top&#x60; or &#x60;margin-bottom&#x60;
