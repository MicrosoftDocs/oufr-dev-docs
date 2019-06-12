# Overview
The ChoiceGroup component, also known as radio buttons, let users select one option from two or more choices. Each option is represented by one ChoiceGroup button; a user can select only one ChoiceGroup in a button group.

ChoiceGroup emphasize all options equally, and that may draw more attention to the options than necessary. Consider using other controls, unless the options deserve extra attention from the user. For example, if the default option is recommended for most users in most situations, use a Dropdown component instead.

If there are only two mutually exclusive options, combine them into a single Checkbox or Toggle switch. For example, use a Checkbox for &quot;I agree&quot; instead of ChoiceGroup buttons for &quot;I agree&quot; and &quot;I don&#39;t agree.&quot;



# Best Practices

## Do &#10003;
- Use when there are 2-7 options, if you have enough screen space and the options are important enough to be a good use of that screen space. Otherwise, use a Checkbox or Dropdown list.
- Use on wizard pages to make the alternatives clear, even if a Checkbox is otherwise acceptable.
- List the options in a logical order, such as most likely to be selected to least, simplest operation to most complex, or least risk to most. Alphabetical ordering is not recommended because it is language dependent and therefore not localizable.
- If none of the options is a valid choice, add another option to reflect this choice, such as &quot;None&quot; or &quot;Does not apply&quot;.
- Select the safest (to prevent loss of data or system access) and most secure and private option as the default. If safety and security aren&#39;t factors, select the most likely or convenient option.
- Align radio buttons vertically instead of horizontally, if possible. Horizontal alignment is harder to read and localize.

## Don't &#10008;
- Use when the options are numbers that have fixed steps, like 10, 20, 30. Use a Slider component instead.
- Use if there are more than 7 options, use a Dropdown instead.
- Nest with other ChoiceGroup or CheckBoxes. If possible, keep all the options at the same level.