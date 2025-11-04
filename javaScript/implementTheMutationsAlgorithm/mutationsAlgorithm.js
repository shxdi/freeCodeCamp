function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  for (let char of secondWord) {
    if (!firstWord.includes(char)) {
      return false;
    }
  }

  return true;
}
