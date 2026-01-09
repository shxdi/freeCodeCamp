/*
Given a string and a target number, determine whether the string contains exactly the target 
    number of consonants.

Consonants are all alphabetic characters except "a", "e", "i", "o", and "u" in any case.
Ignore digits, punctuation, spaces, and other non-letter characters when counting.
*/

/*
1. hasConsonantCount("helloworld", 7) should return true.
2. hasConsonantCount("eieio", 5) should return false.
3. hasConsonantCount("freeCodeCamp Rocks!", 11) should return true.
4. hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24) should return false.
5. hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23) should return true.
*/

function hasConsonantCount(text, target) {
  let chars = text.split('');
  let consonantCount = 0;

  for (let char of chars) {
    let regex = /[b-df-hj-np-tv-z]/i;

    if (regex.test(char)) {
      consonantCount++;
    }
  }

  if (consonantCount === target) {
    return true;
  } else {
    return false;
  }
}
