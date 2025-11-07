function convertHTML(string) {
  let convertedString = string.split('');

  for (let i = 0; i < convertedString.length; i++) {
    if (convertedString[i] === '&') {
      convertedString[i] = '&amp;';
    } else if (convertedString[i] === '<') {
      convertedString[i] = '&lt;';
    } else if (convertedString[i] === '>') {
      convertedString[i] = '&gt;';
    } else if (convertedString[i] === `"`) {
      convertedString[i] = '&quot;';
    } else if (convertedString[i] === `'`) {
      convertedString[i] = '&apos;';
    }
  }

  convertedString = convertedString.join('');

  return convertedString;
}
