function destroyer(arr, ...args) {
  const finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!args.includes(arr[i])) {
      finalArr.push(arr[i]);
    }
  }

  return finalArr;
}
