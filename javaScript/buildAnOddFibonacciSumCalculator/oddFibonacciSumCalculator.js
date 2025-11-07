function sumFibs(num) {
  let sum = 1;
  let newFib;

  let fibOne = 0;
  let fibTwo = 1;

  while (fibOne + fibTwo <= num) {
    newFib = fibOne + fibTwo;
    console.log(newFib);

    if (newFib % 2 !== 0) {
      sum += newFib;
    }

    fibOne = fibTwo;
    fibTwo = newFib;

    console.log('sum:', sum);
  }

  return sum;
}
