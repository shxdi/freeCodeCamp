function chunkArrayInGroups(arr, num) {
  let groupArr = [];

  for (let i = 0; i < arr.length; i += num) {
    let currentArr = [];

    for (let j = 0 + i; j < num + i; j++) {
      if (arr[j] !== undefined) {
        currentArr.push(arr[j]);
      }
    }
    groupArr.push(currentArr);
  }

  return groupArr;
}
