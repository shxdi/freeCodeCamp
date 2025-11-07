function bouncer(arr) {
  let nonFalse = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      nonFalse.push(arr[i]);
    }
  }

  return nonFalse;
}
