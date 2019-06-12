# Overview
A DocumentCard is a card representation of a file. This is usually richer than just seeing the file in a grid view, as the card can contain additional metadata or actions.


# Best Practices

## Do &#10003;
- Use this control to represent Office documents or other user-relevant files in aggregate views, such as when you are showing the user’s most trending document.
- Incorporate metadata that is relevant and useful in this particular view. A card can be specialized to be about the document’s latest changes, or about the document’s popularity, as you see fit.
- Use the DocumentCard when you are illustrating an event that encompasses multiple files. For example, a card can be configured to represent a single upload action that consisted in adding more than one file.

## Don't &#10008;
- Don’t use the DocumentCard in views where the user is likely to be performing bulk operations in files, or when the list may get very long. Specifically, if you are showing all the items inside an actual folder, a card may be overkill because the majority of the items in the folder may not have interesting metadata.
- Don’t use the DocumentCard if space is at a premium or you can’t show relevant and timely commands or metadata. Cards are useful because they can expose on-item interactions like “Share” buttons or view counts. If your app does not need this, show a simple grid or list of items instead, which are easier to scan.