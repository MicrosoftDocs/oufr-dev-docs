---
title: Fabric SearchBox Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
SearchBoxes provide an input field for searching through content, allowing users to locate specific items within the website or app.


## Do &#10003;
- Use placeholder text in the SearchBox to describe what users can search for.
- Example: &quot;Search&quot;; &quot;Search files&quot;; &quot;Search site&quot;
- Once the user has clicked into the SearchBox but hasn’t entered input yet, use &quot;hint text&quot; to communicate search scope.
- Examples: &quot;Try searching for a PDFs&quot;; &quot;Search contacts list&quot;; &quot;Type to find \&lt;content type\&gt;&quot;
- Use the Underlined SearchBox for CommandBars.


## Don't &#10008;
- Don&#39;t leave the SearchBox blank because it&#39;s too ambiguous.
- Don&#39;t have lengthy and unclear hint text. It should be used to clarify and set expectations.
- Don&#39;t provide inaccurate matches or bad predictions, as it will make search seem unreliable and will result in user frustration.
- Don’t provide too much information or metadata in the suggestions list; it’s intended to be lightweight.
- Don&#39;t build a custom search control based on the default text box or any other control.
- Don&#39;t use SearchBox if you cannot reliably provide accurate results.
