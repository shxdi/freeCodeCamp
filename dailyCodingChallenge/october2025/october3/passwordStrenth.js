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

function checkStrength(password) {
  // Turn password string into array to seperate digits
  let digits = password.split('');

  // Create variable for strength
  let strength = 0;

  return password;
}

// Evaluate digits one by one for first rule
// If passes then strength++

// Evaluate digits one by one for second rule
// If passes then strength++

// Evaluate digits one by one for third rule
// If passes then strength++

// Evaluate digits one by one for four rule
// If passes then strength++

// If strength = 1 return "weak", 2/3 return "medium", 4 return "strong"
