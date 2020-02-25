---
title: Fabric TextField Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
The TextField component enables a user to type text into an app. It&#39;s typically used to capture a single line of text, but can be configured to capture multiple lines of text. The text displays on the screen in a simple, uniform format.



## Do &#10003;
- Use the TextField to accept data input on a form or page.
- Label the TextField with a helpful name.
- Provide concise helper text that specifies what content is expected to be entered.
- Provide all appropriate states for the control (static, hover, focus, engaged, unavailable, error).
- When part of a form, provide clear designations for which fields are required vs. optional.
- Provide all appropriate methods for submitting provided data (e.g. dedicated ‘Submit’ button).
- Provide all appropriate methods of clearing provided data (‘X’ or something similar).
- Allow for selection, copy and paste of field data.
- Whenever possible, format TextField relative to the expected entry (4-digit PIN, 10-digit phone number (3 separate fields), etc).
- When long entries are expected, provide a mechanism for overflow or expansion of the control itself.
- Ensure that the TextField is functional through use of mouse&#x2F;keyboard or touch when available.
- Ensure that the TextField is accessible through screen reader and&#x2F;or other accessibility tools.


## Don't &#10008;
- Don’t use a TextField to render basic copy as part of a body element of a page.
- Don’t provide an unlabeled TextField and expect that users will know what to do with it.
- Don’t place a TextField inline with body copy.
- Don’t be overly verbose with helper text.
- Don’t occlude the entry or allow entry when the active content is not visible.
