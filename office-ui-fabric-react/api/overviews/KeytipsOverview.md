---
title: Fabric Keytips Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

## Overview
A Keytip is a small popup near a component that indicates a key sequence that
will trigger that component. These are not to be confused with keyboard
shortcuts; they are instead key sequences to traverse through levels of UI
components. Technically, a Keytip is a wrapper around a Callout where the
target element is discovered through a &#39;data-ktp-target&#39; attribute on that
element.

To enable Keytips on your page, a developer will add the KeytipLayer component
somewhere in their document. It can be added anywhere in your document, but
must only be added once. Use the registerKeytip utility helper to add a
Keytip. A user will enter and exit keytip mode with a
IKeytipTransitionSequence, which is a key with any amount of modifiers (Alt,
Shift, etc).

By default, the entry and exit sequence is &#39;Alt-Windows&#39; (Meta) on Windows and
&#39;Option-Control&#39; on macOS. There is also a sequence to &#39;return&#39; up a level of
keytips while traversing. This is by default &#39;Esc&#39;.

Fabric components that have keytips enabled have an optional &#39;keytipProps&#39; prop
which handles registering, unregistering, and rendering of the keytip. The
keySequences of the Keytip should be the full sequence to get to that keytip.
There is a &#39;buildKeytipConfigMap&#39; helper which will build a map of ID -&gt;
IKeytipProps to assist in defining your keytips.



## Do &#10003;
- Keytip sequences can be duplicated as long as none of their siblings have the same sequence


## Don't &#10008;
- Don&#39;t create more than 1 KeytipLayer per app. This will cause issues with the key listeners
- Don&#39;t attach keytips to components that will make your page scroll. Keytip mode automically exits on scroll
