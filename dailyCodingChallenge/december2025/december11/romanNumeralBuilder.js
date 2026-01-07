/*
Given an integer, return its equivalent value in Roman numerals.

Roman numerals use these symbols:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000

Roman numerals are written from largest to smallest, left to right using the following rules:

Addition is used when a symbol is followed by one of equal or smaller value. For example, 18 is 
    written as XVIII (10 + 5 + 1 + 1 + 1 = 18).
Subtraction is used when a smaller symbol appears before a larger one, to represent 4 or 9 in 
    any place value. For example, 19 is written as XIX (10 + (10 - 1)).
No symbol may be repeated more than three times in a row. Subtraction is used when you would 
    otherwise need to write a symbol more than three times in a row. So the largest number 
    you can write is 3999.

Here's one more example: given 1464, return "MCDLXIV" (1000 + (500 - 100) + 50 + 10 + (5 - 1)).
*/

/*
1. toRoman(18) should return "XVIII".
2. toRoman(19) should return "XIX".
3. toRoman(1464) should return "MCDLXIV".
4. toRoman(2025) should return "MMXXV".
5. toRoman(3999) should return "MMMCMXCIX".
*/

function toRoman(num) {
  let remaining = num;
  let roman = '';

  if (num > 3999) {
    return 'Number is too large';
  }

  while (remaining > 0) {
    if (remaining >= 1000) {
      roman += 'M';
      remaining -= 1000;
    } else if (remaining >= 900) {
      roman += 'CM';
      remaining -= 900;
    } else if (remaining >= 500) {
      roman += 'D';
      remaining -= 500;
    } else if (remaining >= 400) {
      roman += 'CD';
      remaining -= 400;
    } else if (remaining >= 100) {
      roman += 'C';
      remaining -= 100;
    } else if (remaining >= 90) {
      roman += 'XC';
      remaining -= 90;
    } else if (remaining >= 50) {
      roman += 'L';
      remaining -= 50;
    } else if (remaining >= 40) {
      roman += 'XL';
      remaining -= 40;
    } else if (remaining >= 10) {
      roman += 'X';
      remaining -= 10;
    } else if (remaining >= 9) {
      roman += 'IX';
      remaining -= 9;
    } else if (remaining >= 5) {
      roman += 'V';
      remaining -= 5;
    } else if (remaining >= 4) {
      roman += 'IV';
      remaining -= 4;
    } else if (remaining >= 1) {
      roman += 'I';
      remaining -= 1;
    }
  }

  console.log(remaining);
  return roman;
}
