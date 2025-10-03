/* Given a password string, return "weak", "medium", or "strong" based on the
strength of the password. 

A password is evaluated according to the following rules:
It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.

Return "weak" if the password meets fewer than two of the rules. 
Return "medium" if the password meets 2 or 3 of the rules. 
Return "strong" if the password meets all 4 rules. */

// Create variable for strength
let strength = 0;

function checkStrength(password) {
  // Turn password string into array to seperate digits
  let digits = password.split('');

  // Evaluate digits one by one for first rule
  checkFirst(digits);

  // Evaluate digits one by one for second rule
  checkSecond(digits);

  // Evaluate digits one by one for third rule
  checkThird(digits);

  // If strength = 0/1 return "weak", 2/3 return "medium", 4 return "strong"
  if (strength === 0 || strength === 1) {
    return 'weak';
  } else if (strength === 2 || strength === 3) {
    return 'medium';
  } else if (strength === 4) {
    return 'strong';
  }

  return password;
}

// Create function to check first rule
function checkFirst(digits) {
  if (digits[7] !== undefined) {
    // If passes then strength++
    strength++;
  }
}

// Create function to check second rule
function checkSecond(digits) {
  let upperCase;
  let lowerCase;

  for (let i = 0; i < digits.length; i++) {
    if (
      digits[i] === digits[i].toUpperCase() &&
      digits[i] !== digits[i].toLowerCase()
    ) {
      upperCase = true;
      return;
    } else {
      upperCase = false;
    }
  }

  for (let i = 0; i < digits.length; i++) {
    if (
      digits[i] === digits[i].toLowerCase() &&
      digits[i] !== digits[i].toUpperCase()
    ) {
      lowerCase = true;
      return;
    } else {
      lowerCase = false;
    }
  }

  if (upperCase === true && lowerCase === true) {
    // If passes then strength++
    strength++;
  }
}

// Create function to check third rule
function checkThird(digits) {
  let hasNumber;

  for (let i = 0; i < digits.length; i++) {
    if (!isNaN(digits[i])) {
      hasNumber = true;
    } else {
      hasNumber = false;
    }
  }

  if (hasNumber === true) {
    // If passes then strength++
    strength++;
  }
}

// Evaluate digits one by one for four rule
// If passes then strength++

// Checks the code must pass
/* 
1. checkStrength("123456") should return "weak".
2. checkStrength("pass!!!") should return "weak".
3. checkStrength("Qwerty") should return "weak".
4. checkStrength("PASSWORD") should return "weak".
5. checkStrength("PASSWORD!") should return "medium".
6. checkStrength("PassWord%^!") should return "medium".
7. checkStrength("qwerty12345") should return "medium".
8. checkStrength("PASSWORD!") should return "medium".
9. checkStrength("PASSWORD!") should return "medium".
10. checkStrength("S3cur3P@ssw0rd") should return "strong".
11. checkStrength("C0d3&Fun!") should return "strong".
*/
