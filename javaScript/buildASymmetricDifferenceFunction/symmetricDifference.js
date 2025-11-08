function diffArray(arrOne, arrTwo) {
  let combinedArr;

  if (arrOne.length === 0) {
    combinedArr = arrTwo;
  } else if (arrTwo.length === 0) {
    combinedArr = arrOne;
  } else {
    combinedArr = `${arrOne},${arrTwo}`.split(',');
  }

  let differences = [];

  differences = combinedArr.filter(checkIfDuplicate);

  return differences;
}

function checkIfDuplicate(element, index, array) {
  let firstIndex = array.indexOf(element);
  let secondIndex = array.indexOf(element, firstIndex + 1);

  if (secondIndex === -1) {
    return true;
  }
}
