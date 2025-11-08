function smallestCommons(numArr) {
  numArr.sort((a, b) => a - b);
  let allBetween = [];
  let leastCommon = 0;
  let currentNum = numArr[1];

  for (let i = numArr[0]; i <= numArr[1]; i++) {
    allBetween.push(i);
  }

  while (leastCommon === 0) {
    let testCurrent = allBetween.every((num) => currentNum % num === 0);

    if (testCurrent) {
      leastCommon = currentNum;
    }

    currentNum++;
  }

  return leastCommon;
}
