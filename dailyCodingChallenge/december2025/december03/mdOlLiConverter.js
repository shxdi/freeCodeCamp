/*
Given a string representing an ordered list item in Markdown, return the equivalent HTML string.

A valid ordered list item in Markdown must:

Start with zero or more spaces, followed by
A number (1 or greater) and a period (.), followed by
At least one space, and then
The list item text.
If the string doesn't have the exact format above, return "Invalid format". Otherwise, wrap 
    the list item text in li tags and return the string.

For example, given "1. My item", return "<li>My item</li>"

Note: The console may not display HTML tags in strings when logging messages. Check the 
    browser console to see logs with tags included.
*/

/*
1. convertListItem("1. My item") should return "<li>My item</li>".
2. convertListItem(" 1.  Another item") should return "<li>Another item</li>".
3. convertListItem("1 . invalid item") should return "Invalid format".
4. convertListItem("2. list item text") should return "<li>list item text</li>".
5. convertListItem(". invalid again") should return "Invalid format".
6. convertListItem("A. last invalid") should return "Invalid format".
*/

function convertListItem(markdown) {
  let regex = / *[0-9][.] *.*/;

  if (!regex.test(markdown)) {
    return 'Invalid format';
  }

  let itemText = markdown.split('.');
  itemText.shift();
  itemText = itemText.join('.').trim();

  console.log(itemText);

  let html = `<li>${itemText}</li>`;

  return html;
}
