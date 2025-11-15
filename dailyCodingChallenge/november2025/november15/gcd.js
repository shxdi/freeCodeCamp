/*
Given two positive integers, return their greatest common divisor (GCD).

The GCD of two integers is the largest number that divides evenly into both numbers without 
leaving a remainder.
For example, the divisors of 4 are 1, 2, and 4. The divisors of 6 are 1, 2, 3, and 6. So given 
4 and 6, return 2, the largest number that appears in both sets of divisors.
*/

/*
1. gcd(4, 6) should return 2.
2. gcd(20, 15) should return 5.
3. gcd(13, 17) should return 1.
4. gcd(654, 456) should return 6.
5. gcd(3456, 4320) should return 864.
*/

function gcd(x, y) {
  let xDivisors = [];
  let yDivisors = [];
  let greatestCommon;

  for (let i = 1; i < x + 1; i++) {
    if (x % i === 0) {
      xDivisors.push(i);
    }
  }

  for (let i = 1; i < y + 1; i++) {
    if (y % i === 0) {
      yDivisors.push(i);
    }
  }

  xDivisors.forEach((num) => {
    for (let i = 0; i < yDivisors.length; i++) {
      if (yDivisors[i] === num) {
        greatestCommon = num;
      }
    }
  });

  return greatestCommon;
}
