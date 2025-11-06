function sliceAndSplice(arr1, arr2, index) {
  let splicedArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    splicedArr.splice(index + i, 0, arr1[i]);
  }

  return splicedArr;
}
