function findLongestWordLength(sentence) {
  let words = sentence.split(' ');
  let largestWord = '';

  for (let word of words) {
    if (word.length > largestWord.length) {
      largestWord = word;
    }
  }

  return largestWord.length;
}
