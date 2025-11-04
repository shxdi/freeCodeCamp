function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return '';
  }

  let repeatedStr = '';

  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}
