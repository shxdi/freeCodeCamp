/*
Given a string title, return a new string formatted in title case using the following rules:

Capitalize the first letter of each word.
Make all other letters in each word lowercase.
Words are always separated by a single space.
*/

/*
1. titleCase("hello world") should return "Hello World".
2. titleCase("the quick brown fox") should return "The Quick Brown Fox".
3. titleCase("JAVASCRIPT AND PYTHON") should return "Javascript And Python".
4. titleCase("AvOcAdO tOAst fOr brEAkfAst") should return "Avocado Toast For Breakfast".
*/

function titleCase(title) {
  let words = title.split(' ');
  let capTitle = [];

  for (let word of words) {
    let firstChar = word[0];
    let remainChar = word.slice(1);
    let capWord = '';

    capWord += firstChar.toUpperCase();

    for (let i = 0; i < remainChar.length; i++) {
      capWord += remainChar[i].toLowerCase();
    }

    capTitle.push(capWord);
  }

  return capTitle.join(' ');
}
