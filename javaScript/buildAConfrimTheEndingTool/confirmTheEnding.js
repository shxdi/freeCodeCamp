function confirmEnding(str, endingStr) {
  let strEnd = str.slice(-endingStr.length);

  if (strEnd === endingStr) {
    return true;
  } else {
    return false;
  }
}
