function truthCheck(arr, str) {
  const testValues = [];

  for (let ele of arr) {
    testValues.push(ele[str]);
  }

  return testValues.every((value) => Boolean(value));
}
