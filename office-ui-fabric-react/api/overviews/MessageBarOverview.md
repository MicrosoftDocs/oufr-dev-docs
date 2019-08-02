# Overview
A MessageBar is an area at the top of a primary view that displays relevant status information. You can use a MessageBar to tell the user about a situation that does not require their immediate attention and therefore does not need to block other activities.


## Do &#10003;
- Place the message bar near the top of the relevant view, in a highly visible but unobtrusive location.
- Keep the text very brief. Be succinct and your users are more likely to read everything you say.
- Consider how localization may affect the message. Translation to other languages may add up to 33% more characters to the string length.
- Use the right variant for the type and urgency of the particular message (see variants)

## Don't &#10008;
- Don’t use paragraphs, long sentences, or special formatting in a MessageBar. The control tries to grow to accommodate all the text and will just result in pushing the user’s main content too low on the view.
- Don’t use buttons when a subtler link will suffice. Reserve the usage of button for when the MessageBar has a single ”hero” action that has vital usefulness to the user at that particular moment. Using more than one button is discouraged.
