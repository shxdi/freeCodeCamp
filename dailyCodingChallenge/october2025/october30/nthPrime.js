/*
A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. 
The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th 
prime number: 11.
*/

/*
1. nthPrime(5) should return 11.
2. nthPrime(10) should return 29.
3. nthPrime(16) should return 53.
4. nthPrime(99) should return 523.
5. nthPrime(1000) should return 7919.
*/

function nthPrime(n) {
  let primeNumbers = [];
  let currentNumber = 2;
  let isPrime;

  while (n > primeNumbers.length) {
    isPrime = true;

    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
      if (currentNumber % i === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      primeNumbers.push(currentNumber);
    }

    currentNumber++;
  }

  return primeNumbers[n - 1];
}
