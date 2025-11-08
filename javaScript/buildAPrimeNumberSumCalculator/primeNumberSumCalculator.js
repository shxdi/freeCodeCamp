function sumPrimes(num) {
  if (num < 2) {
    return 0;
  }

  let primeNumbers = [];
  let currentNumber = 2;
  let isPrime = true;

  while (num >= currentNumber) {
    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
      if (currentNumber % i === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      primeNumbers.push(currentNumber);
    }

    currentNumber++;
    isPrime = true;
  }

  return primeNumbers.reduce((accumulator, current) => accumulator + current);
}
