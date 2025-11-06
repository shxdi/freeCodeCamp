function largestOfAll(arr) {
  let largestNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    let largestNum;

    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {
        largestNum = arr[i][j];
      } else if (largestNum < arr[i][j]) {
        largestNum = arr[i][j];
      }
    }

    largestNumbers.push(largestNum);
  }

  return largestNumbers;
}
