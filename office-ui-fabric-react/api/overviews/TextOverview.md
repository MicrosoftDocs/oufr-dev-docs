---
title: Fabric Text Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
Text is a component for displaying text.
You can use Text to standardize text across your web app.

You can specify the &#x60;variant&#x60; prop to apply font styles to Text.
This variant pulls from the Fabric theme loaded on the page.
If you do not specify the &#x60;variant&#x60; prop, by default, Text applies the styling from specifying the &#x60;variant&#x60; value to &#x60;medium&#x60;.

The Text control is inline wrap by default.
You can specify &#x60;block&#x60; to enable block and &#x60;nowrap&#x60; to enable &#x60;nowrap&#x60;.
In order for ellipsis on overflow to work properly, &#x60;block&#x60; should be set to true in addition to &#x60;nowrap&#x60;.
Both of these props are false by default.



## Do &#10003;
- Use Text to display read-only text that inherits styling from ITheme.


## Don't &#10008;
- Don&#39;t nest Text components if you want to inherit font styling. Use a div or span instead that inherits by default.
