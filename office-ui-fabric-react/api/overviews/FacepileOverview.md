---
title: Fabric Facepile Overview | Microsoft Docs
author: Vitalius1
ms.author: vibraga
---

# Overview
The Facepile shows a list of faces or initials in a horizontal lockup. Each circle represents a person. Many times this component is used when sharing who has access to a specific view or file or when assigning a user to a task within a workflow.

## Adding people

The component can include an add button which can be used for quickly adding a person to the list.

## Empty state

The empty state of the Facepile should include only an add button. Another variant is to use an input field with placeholder text instructing the user to add a person. See the PeoplePicker component for the menu used to add people to the Facepile list.

## One person

When there is only one person in the Facepile, consider using their name next to the face or initials.

## Expanding the list when there is no overflow

When there is a need to show the Facepile expanded into a vertical list, include a downward chevron button. Clicking or tapping on the chevron would open a standard list view of personas.

## Overflow

When the Facepile exceeds a max number of 5 people, show a button at the end of the list indicating how many are not being shown. Clicking or tapping on the overflow would open a standard list view of personas.


## Do &#10003;
- Use if looking for a way to represent who has access to an area and need to show that as a people representation.
- Only show the Add button if a user has access to do so.
- Allow a way for the user to understand who the person is. Many common ways to do this are with a tooltip or adding the ability to open up a PeopleCard Experience.

## Don't &#10008;
- Use for things other than people.
- Overwhelm users by listing every single person as a circle but truncate and provide a way to see the full list.
- Don’t use this control for experiences where you need to manage details of hundreds of users, you are better off using a list control.