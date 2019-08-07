---
title: Fabric SearchBox Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

# Overview
SearchBoxes provide an input field for searching through content, allowing users to locate specific items within the website or app.


## Do &#10003;
- Use placeholder text in the SearchBox to describe what users can search for.
- Example: "Search"; "Search files"; "Search site"
- Once the user has clicked into the SearchBox but hasn’t entered input yet, use "hint text" to communicate search scope.
- Examples: "Try searching for a PDFs"; "Search contacts list"; "Type to find \<content type\>"
- Provide autocomplete suggestions to help the user search quickly. These suggestions can be from past searches or auto-completions of the user's query text.
- Provide autocomplete suggestions where there are strong matches to the user's query that the user may want to view immediately.
- Use a visual separator to define a group of a similar or conceptually aligned autocomplete suggestions.
- If possible, provide a preview (e.g. image, title, etc.) for autocomplete suggestions to help the user quickly determine if the suggested result is what they were searching for.
- Use the Underlined SearchBox for CommandBars.

## Don't &#10008;
- Don't leave the SearchBox blank because it's too ambiguous.
- Don't have lengthy and unclear hint text. It should be used to clarify and set expectations.
- Don't provide too many autocomplete suggestions, as that will overwhelm the user.
- Don't provide inaccurate matches or bad predictions, as it will make search seem unreliable and will result in user frustration.
- Don’t provide too much information or metadata in the suggestions list; it’s intended to be lightweight.
- Don’t use an autocomplete dropdown for something that has one choice; there must be more than one item.
- Don't build a custom search control based on the default text box or any other control.
- Don't use SearchBox if you cannot reliably provide accurate results.