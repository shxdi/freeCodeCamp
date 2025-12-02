function permuteString(str, prefix = '', arr = []) {
  if (str.length === 0) {
    arr.push(prefix);
    prefix = '';
    return arr;
  }

  for (let i = 0; i < str.length; i++) {
    let currentChar = prefix;
    currentChar += str[i];
    let remainingChars = str.slice(0, i) + str.slice(i + 1);

    permuteString(remainingChars, currentChar, arr);
  }

  // Remove duplicates
  let results = [];
  arr.forEach((item) => {
    if (!results.includes(item)) {
      results.push(item);
    }
  });

  return results;
}
