/*
Given a string of HTML code, remove the tags and return the plain text content.

The input string will contain only valid HTML.
HTML tags may be nested.
Remove the tags and any attributes.
For example, '<a href="#">Click here</a>' should return "Click here". 
*/

/*
1. stripTags('<a href="#">Click here</a>') should return "Click here".
2. stripTags('<p class="center">Hello <b>World</b>!</p>') should return "Hello World!".
3. stripTags('<img src="cat.jpg" alt="Cat">') should return an empty string ("").
4. stripTags('<main id="main"><section class="section">section</section><section class=
    "section">section</section></main>') should return sectionsection.
*/

function stripTags(html) {
  // Add in ',' to seperate HTML tags
  let newHtml = html.replace(/>/g, '>,');
  newHtml = newHtml.replace(/</g, ',<');

  // Split into array
  let htmlArray = newHtml.split(',');

  // Loop removing the tags
  for (let i = 0; i < htmlArray.length; i++) {
    // If the first letter equals the opening tag
    if (htmlArray[i][0] === '<') {
      // Delete from array
      let deleted = htmlArray.splice(i, 1);
    }
  }
  console.log(htmlArray);

  // Join htmlArray into final text
  let tagsStripped = htmlArray.join('');

  return tagsStripped;
}
