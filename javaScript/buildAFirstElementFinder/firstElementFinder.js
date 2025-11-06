function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let test = func(arr[i]);

    if (test === true) {
      return arr[i];
    }
  }
}
