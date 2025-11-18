/*
Welcome to the 100th Daily Coding Challenge!

Given a string, repeat its characters until the result is exactly 100 characters long. 
If your repetitions go over 100 characters, trim the extra so it's exactly 100.
*/

/*
1. oneHundred("One hundred ") should return "One hundred One hundred One hundred One hundred One 
hundred One hundred One hundred One hundred One ".
2. oneHundred("freeCodeCamp ") should return "freeCodeCamp freeCodeCamp freeCodeCamp 
freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC".
3. oneHundred("daily challenges ") should return "daily challenges daily challenges daily 
challenges daily challenges daily challenges daily challenge".
4. oneHundred("!") should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!".
*/

function oneHundred(chars) {
  let length = chars.length;
  let iterations = Math.ceil(100 / length);
  let hundredChars = '';

  for (let i = 0; i < iterations; i++) {
    hundredChars += chars;
  }

  hundredChars = hundredChars.slice(0, 100);

  return hundredChars;
}
