/*
Given a string of a valid HTML element, return the attributes of the element using the 
following criteria:

You will only be given one element.
Attributes will be in the format: attribute="value".
Return an array of strings with each attribute property and value, separated by a comma, 
in this format: ["attribute1, value1", "attribute2, value2"].
Return attributes in the order they are given.
If no attributes are found, return an empty array.
*/

/*
1. extractAttributes('<span class="red"></span>') should return ["class, red"].
2. extractAttributes('<meta charset="UTF-8" />') should return ["charset, UTF-8"].
3. extractAttributes("<p>Lorem ipsum dolor sit amet</p>") should return [].
4. extractAttributes('<input name="email" type="email" required="true" />') should return 
["name, email", "type, email", "required, true"].
5. extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>') should 
return ["id, submit", "class, btn btn-primary"].
*/

function extractAttributes(element) {
  // Seperate opening tag from element
  let openingTag = element.split('>')[0];

  // Seperate attributes from opening tag
  let attributes = openingTag.split(' ');
  // Remove first array item
  attributes.shift();
  // Remove '/' if element was a void element
  if (attributes[attributes.length - 1] === '/') {
    attributes.pop();
  }

  // If array item has no attribute property, join with before item
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].indexOf('=') === -1) {
      // Place current valule inside previous property
      attributes[i - 1] += ' ' + attributes[i];
      // Remove current item
      attributes.splice(i, 1);
    }
  }

  // Pair property and values
  for (let i = 0; i < attributes.length; i++) {
    // replace '=' for ', ' for desired format
    attributes[i] = attributes[i].replace('=', ', ');
    // Remove ' or " around value
    attributes[i] = attributes[i].replace(/["']/g, '');
  }

  return attributes;
}
