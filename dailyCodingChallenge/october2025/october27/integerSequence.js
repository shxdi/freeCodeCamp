/*
Given a positive integer, return a string with all of the integers from 1 up to, and including, 
the given number, in numerical order.

For example, given 5, return "12345".
*/

/*
1. sequence(5) should return "12345".
2. sequence(10) should return "12345678910".
3. sequence(1) should return "1".
4. sequence(27) should return "123456789101112131415161718192021222324252627".
*/

function sequence(n) {
  let sequence = '';

  for (let i = 0; i < n; i++) {
    sequence += i + 1;
  }

  return sequence;
}
