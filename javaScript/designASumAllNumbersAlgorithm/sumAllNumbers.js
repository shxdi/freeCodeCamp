function sumAll(numArr) {
  let smallNum;
  let bigNum;
  let sum = 0;

  if (numArr[0] > numArr[1]) {
    bigNum = numArr[0];
    smallNum = numArr[1];
  } else {
    bigNum = numArr[1];
    smallNum = numArr[0];
  }

  for (let i = smallNum; i <= bigNum; i++) {
    sum += i;
  }

  return sum;
}
