---
title: Fabric ContextualMenu Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

# Overview
ContextualMenus are lists of commands that are based on the context of selection, mouse hover or keyboard focus. They are one of the most effective and highly used command surfaces, and can be used in a variety of places.

There are variants that originate from a command bar, or from cursor or focus. Those that come from CommandBars use a beak that is horizontally centered on the button. Ones that come from right click and menu button do not have a beak, but appear to the right and below the cursor. ContextualMenus can have submenus from commands, show selection checks, and icons.

Organize commands in groups divided by rules. This helps users remember command locations, or find less used commands based on proximity to others. One should also group sets of mutually exclusive or multiple selectable options. Use icons sparingly, for high value commands, and don’t mix icons with selection checks, as it makes parsing commands difficult. Avoid submenus of submenus as they can be difficult to invoke or remember.



## Do &#10003;
- Use to display commands.
- Divide groups of commands with rules.
- Use selection checks without icons.
- Provide submenus for sets of related commands that aren’t as critical as others.

## Don't &#10008;
- Use them to display content.
- Show commands as one large group.
- Mix checks and icons.
- Create submenus of submenus.