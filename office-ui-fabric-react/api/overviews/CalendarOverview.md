---
title: Fabric Calendar Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
The calendar control lets people select and view a single date or a range of dates in their calendar. It’s made up of 3 separate views: the month view, year view, and decade view. 



## Do &#10003;
- Use the control as a single entity.
- Set the default date to the current date unless a specific date is required for context (e.g. the date of the conference).
- The control is designed to resize relative to available screen width. Allow it to render in either wide or narrow as appropriate.
- When the control is engaged, the Calendar renders as a flyout and has defined widths (300px -narrow and 440px – wide). Plan your UI implementation accordingly.
- The control renders date in a specific format. If allowing for manual entry of date, provide helper text in the appropriate format.


## Don't &#10008;
- Don&#39;t attempt to break apart year from month&#x2F;day selectors. If granularity is required, use the Dropdown control or something similar.
- Don&#39;t attempt to force resize the control in any way.
- Don&#39;t force the control to render one mode vs. the other (year or month&#x2F;day)
- The flyout selector is a light dismiss control. Don&#39;t modify this behavior in any way.
