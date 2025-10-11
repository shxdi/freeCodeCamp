/*Given a string representing a hexadecimal number (base 16), return its decimal (base 10) 
value as an integer.

Hexadecimal is a number system that uses 16 digits:
0-9 represent values 0 through 9.
A-F represent values 10 through 15.

Here's a partial conversion table:
Hexadecimal	Decimal
0	0
1	1
...	...
9	9
A	10
...	...
F	15
10	16
...	...
9F	159
A0	160
...	...
FF	255
100	256*/

let valid;

function hexToDecimal(hex) {
  let hexArray = hex.split('');

  checkValid(hexArray);
  if (valid !== true) {
    return 'error';
  }

  return hex;
}

function checkValid(hexArray) {
  for (let i = 0; i < hexArray.length; i++) {
    if (!hexArray[i].match(/[0-9|A-F]/i)) {
      alert('Invalid input');
      valid = false;
      return;
    } else {
      valid = true;
    }
  }
}

/*
1. hexToDecimal("A") should return 10.
2. hexToDecimal("15") should return 21.
3. hexToDecimal("2E") should return 46.
4. hexToDecimal("FF") should return 255.
5. hexToDecimal("A3F") should return 2623. 
*/
