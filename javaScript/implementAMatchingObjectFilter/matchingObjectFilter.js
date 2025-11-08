function whatIsInAName(arr, obj) {
  let foundPairs = [];
  let testKeys = Object.keys(obj);

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let checksPassed = 0;
    for (let j = 0; j < testKeys.length; j++) {
      if (current[testKeys[j]] === obj[testKeys[j]]) {
        checksPassed++;
      }
    }

    if (checksPassed === testKeys.length) {
      foundPairs.push(arr[i]);
    }
  }

  return foundPairs;
}
