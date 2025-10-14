/*
 Given two strings, determine how many times the second string appears in the first.

The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. 
The first two a's and the second two.
*/

/*
1. count('abcdefg', 'def') should return 1.
2. count('hello', 'world') should return 0.
3. count('mississippi', 'iss') should return 2.
4. count('she sells seashells by the seashore', 'sh') should return 3.
5. count('101010101010101010101', '101') should return 10.
*/

function count(text, pattern) {
  // Variable for count of pattern
  let patternCount = 0;

  // Find how many possible patterns in text
  let possibleCount = text.length - pattern.length + 1;

  // Loop to check pattern in text
  for (let i = 0; i < possibleCount; i++) {
    console.log(text.substr(i, pattern.length));
    if (text.substr(i, pattern.length) === pattern) {
      patternCount++;
    }
  }

  return patternCount;
}
