/*
Given a string sentence, return a compressed version of the sentence where consecutive 
    duplicate words are replaced by the word followed with the number of times it repeats 
    in parentheses.

Only consecutive duplicates are compressed.
Words are separated by single spaces.
For example, given "yes yes yes please", return "yes(3) please".
*/

/*
1. compressString("yes yes yes please") should return "yes(3) please".
2. compressString("I have have have apples") should return "I have(3) apples".
3. compressString("one one three and to the the the the") should return "one(2) three and to 
    the(4)".
4. compressString("route route route route route route tee tee tee tee tee tee") should return 
    "route(6) tee(6)".
*/

function compressString(sentence) {
  const words = sentence.split(' ');
  let compressedStr = '';
  let previousWord = words[0];
  let wordCount = 1;

  for (let i = 1; i < words.length + 1; i++) {
    if (words[i] === previousWord) {
      wordCount++;
    } else if (words[i] !== previousWord && wordCount === 1) {
      compressedStr += `${previousWord} `;
    } else if (words[i] !== previousWord && wordCount > 1) {
      compressedStr += `${previousWord}(${wordCount}) `;
      wordCount = 1;
    }

    previousWord = words[i];
  }

  return compressedStr.trim();
}
