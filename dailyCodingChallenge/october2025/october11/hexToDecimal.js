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
  // Turn input into array
  let hexArray = hex.split('');

  // Check if input was valid hexadecimal
  checkValid(hexArray);
  if (valid !== true) {
    return 'error';
  }

  // Turn hexadecimal letters into numbers
  for (let i = 0; i < hexArray.length; i++) {
    console.log(hexArray[i]);
    if (hexArray[i] === 'A' || hexArray[i] === 'a') {
      hexArray[i] = 10;
    } else if (hexArray[i] === 'B' || hexArray[i] === 'b') {
      hexArray[i] = 11;
    } else if (hexArray[i] === 'C' || hexArray[i] === 'c') {
      hexArray[i] = 12;
    } else if (hexArray[i] === 'D' || hexArray[i] === 'd') {
      hexArray[i] = 13;
    } else if (hexArray[i] === 'E' || hexArray[i] === 'e') {
      hexArray[i] = 14;
    } else if (hexArray[i] === 'F' || hexArray[i] === 'f') {
      hexArray[i] = 15;
    }
  }

  // Variable for converted decimal
  let decimal = 0;
  // Reverse array for proper order for equation
  let equationArray = hexArray.reverse();

  return decimal;
}

// Function for checking if hexadecimal is valid
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
