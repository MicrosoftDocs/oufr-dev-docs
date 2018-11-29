---
Description: Used to switch between two mutually exclusice options (checked or unchecked, on or off) through a single click or tap.
title: Checkbox
label: Checkbox
keywords: checkbox
---

# Checkbox

A Checkbox is a UI element that allows users to switch between two mutually exclusive options (checked or unchecked, on or off) through a single click or tap. It can also be used to indicate a subordinate setting or preference when paired with another control.

A Checkbox is used to select or deselect action items. It can be used for a single item or for a list of multiple items that a user can choose from. The control has two selection states: unselected and selected.

Use a single Checkbox for a subordinate setting, such as with a "Remember me?" login scenario or with a terms of service agreement.

For a binary choice, the main difference between a Checkbox and a toggle switch is that the Checkbox is for status and the toggle switch is for action. You can delay committing a Checkbox interaction (as part of a form submit, for example), while you should immediately commit a toggle switch interaction. Also, only Checkboxes allow for multi-selection.

Use multiple Checkboxes for multi-select scenarios in which a user chooses one or more items from a group of choices that are not mutually exclusive.


![](../../assets/Checkbox.Default.jpg?raw=true)


<center>
<table>
    <thead>
        <tr>
            <th>Do</th>
            <th>Don't</th>
        </tr>
    <thead>
    <tbody>
        <tr>
            <td><ul><li>Allow users to choose any combination of options when several Checkboxes are grouped together.</ul></li></td>
            <td><ul><li>Don't use a Checkbox as an on/off control. Instead use a toggle switch.</ul></li></td>
        </tr>
        <tr>
            <td></td>
            <td><ul><li>Don’t use a Checkbox when the user can choose only one option from the group, use radio buttons instead.</ul></li></td>
        </tr>
        <tr>
            <td></td>
            <td><ul><li>Don't put two groups of Checkboxes next to each other. Separate the two groups with labels.</ul></li></td>
        </tr>
    </tbody>
</table>
</center>


<iframe src="https://developer.microsoft.com/en-us/fabric#/components/checkbox"></iframe>