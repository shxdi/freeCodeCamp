function steamrollArray(arr) {
  let flattenedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArr = flattenedArr.concat(steamrollArray(arr[i]));
    } else {
      flattenedArr.push(arr[i]);
    }
  }

  return flattenedArr;
}
