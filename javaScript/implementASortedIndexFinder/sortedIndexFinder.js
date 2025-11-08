function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  const isLarger = (element) => element >= num;

  let index = arr.findIndex(isLarger);

  if (index === -1 && arr.length === 0) {
    return 0;
  } else if (index === -1) {
    return arr.length;
  } else {
    return index;
  }
}
