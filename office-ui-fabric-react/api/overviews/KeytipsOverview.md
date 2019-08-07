---
title: Fabric Keytips Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

# Overview
A Keytip is a small popup near a component that indicates a key sequence that
will trigger that component. These are not to be confused with keyboard
shortcuts; they are instead key sequences to traverse through levels of UI
components. Technically, a Keytip is a wrapper around a Callout where the
target element is discovered through a 'data-ktp-target' attribute on that
element.

To enable Keytips on your page, a developer will add the KeytipLayer component
somewhere in their document. It can be added anywhere in your document, but
must only be added once. Use the registerKeytip utility helper to add a
Keytip. A user will enter and exit keytip mode with a
IKeytipTransitionSequence, which is a key with any amount of modifiers (Alt,
Shift, etc).

By default, the entry and exit sequence is 'Alt-Windows' (Meta) on Windows and
'Option-Control' on macOS. There is also a sequence to 'return' up a level of
keytips while traversing. This is by default 'Esc'.

Fabric components that have keytips enabled have an optional 'keytipProps' prop
which handles registering, unregistering, and rendering of the keytip. The
keySequences of the Keytip should be the full sequence to get to that keytip.
There is a 'buildKeytipConfigMap' helper which will build a map of ID ->
IKeytipProps to assist in defining your keytips.



## Do &#10003;
- Keytip sequences can be duplicated as long as none of their siblings have the same sequence

## Don't &#10008;
- Don't create more than 1 KeytipLayer per app. This will cause issues with the key listeners
- Don't attach keytips to components that will make your page scroll. Keytip mode automically exits on scroll
