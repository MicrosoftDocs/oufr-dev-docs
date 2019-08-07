---
title: Fabric Shimmer Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
Shimmer is a temporary animation placeholder for when a service call takes time to return data and we don&#39;t want to block rendering the rest of the UI.

If a smooth transition from Shimmer to content is desired, wrap the content node with a Shimmer element and use the &#x60;isDataLoaded&#x60; prop to trigger the transition. In cases where the content node is not wrapped in a Shimmer, use the &#x60;shimmerElements&#x60; or &#x60;customElementsGroup&#x60; props, and once data arrives, manually replace the Shimmer UI with the intended content. See the examples below for reference.



## Do &#10003;

- Use shimmer to help ease a UI transition when we know the service will potentially take a longer amount of time to retrieve the data.
- Provide widths for each of the shimmer elements you used to build a skeleton layout looking as close as possible to real content it is replacing.
- Use &#x60;isDataLoaded&#x60; prop to trigger the transition once we have the data from the service. The Shimmer UI should Fade out while the real UI Fades In.
- Use shimmer if you know the UI loading time is longer than 1 second.
- Provide an ETA as quickly as possible to help the user understand that the system isn’t broken if you use shimmer and the delay is longer than 10 seconds.
- Provide shimmer designs for the breakpoints that your experience is supported in.

## Don't &#10008;

- Use on the same element both types of widths. It will always default to just one of them. See documentation below.
- Build Shimmer UI should with a lot of details. Circles and rectangles are really as detailed as you want to get. Adding more detail will result in confusion once the UI loads.
- Use shimmer if you are confident that the UI will take less than a second to load.
- Use shimmer as a way to not make improvements in your code to improve performance.