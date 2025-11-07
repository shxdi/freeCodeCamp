function uniteUnique(...args) {
  let uniqueValues = [];

  for (let arg of args) {
    for (let i = 0; i < arg.length; i++) {
      if (!uniqueValues.includes(arg[i])) {
        uniqueValues.push(arg[i]);
      }
    }
  }

  return uniqueValues;
}
