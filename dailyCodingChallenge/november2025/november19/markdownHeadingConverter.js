/*
Given a string representing a Markdown heading, return the equivalent HTML heading.

A valid Markdown heading must:

Start with zero or more spaces, followed by
1 to 6 hash characters (#) in a row, then
At least one space. And finally,
The heading text.
The number of hash symbols determines the heading level. For example, one hash symbol 
corresponds to an h1 tag, and six hash symbols correspond to an h6 tag.

If the given string doesn't have the exact format above, return "Invalid format".

For example, given "# My level 1 heading", return "<h1>My level 1 heading</h1>".
*/

/*
1. convert("# My level 1 heading") should return "<h1>My level 1 heading</h1>".
2. convert("My heading") should return "Invalid format".
3. convert("##### My level 5 heading") should return "<h5>My level 5 heading</h5>".
4. convert("#My heading") should return "Invalid format".
5. convert("  ###  My level 3 heading") should return "<h3>My level 3 heading</h3>".
6. convert("####### My level 7 heading") should return "Invalid format".
7. convert("## My #2 heading") should return "<h2>My #2 heading</h2>".
*/

function convert(heading) {
  const headingReplacements = {
    h1: [/^[ ]*#[ ]+(.+$)/, '<h1>$1</h1>'],
    h2: [/^[ ]*#{2}[ ]+(.+$)/, '<h2>$1</h2>'],
    h3: [/^[ ]*#{3}[ ]+(.+$)/, '<h3>$1</h3>'],
    h4: [/^[ ]*#{4}[ ]+(.+$)/, '<h4>$1</h4>'],
    h5: [/^[ ]*#{5}[ ]+(.+$)/, '<h5>$1</h5>'],
    h6: [/^[ ]*#{6}[ ]+(.+$)/, '<h6>$1</h6>'],
  };
  let htmlHeading = 'Invalid format';

  for (let headingArr in headingReplacements) {
    let regex = headingReplacements[headingArr][0];
    let html = headingReplacements[headingArr][1];

    if (regex.test(heading)) {
      htmlHeading = heading.replace(regex, html);
    }
  }

  return htmlHeading;
}
