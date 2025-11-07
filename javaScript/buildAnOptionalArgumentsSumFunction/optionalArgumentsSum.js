function addTogether(...args) {
  for (let arg of args) {
    if (typeof arg !== 'number') {
      return undefined;
    }
  }

  if (args.length > 1) {
    let sum = 0;

    for (let arg of args) {
      sum += arg;
    }

    return sum;
  } else {
    return function sumOf(num) {
      if (typeof num !== 'number') {
        return undefined;
      }

      return args[0] + num;
    };
  }
}
