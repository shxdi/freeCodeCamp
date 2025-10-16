/*
Given a string, determine if it is a valid email address using the following constraints:

It must contain exactly one @ symbol.

The local part (before the @):
Can only contain letters (a-z, A-Z), digits (0-9), dots (.), underscores (_), or hyphens (-).
Cannot start or end with a dot.

The domain part (after the @):
Must contain at least one dot.
Must end with a dot followed by at least two letters.

Neither the local or domain part can have two dots in a row. 
*/

/*
1. validate("a@b.cd") should return true.
2. validate("hell.-w.rld@example.com") should return true.
3. validate(".b@sh.rc") should return false.
4. validate("example@test.c0") should return false.
5. validate("freecodecamp.org") should return false.
6. validate("develop.ment_user@c0D!NG.R.CKS") should return true.
7. validate("hello.@wo.rld") should return false.
8. validate("hello@world..com") should return false.
9. validate("git@commit@push.io") should return false.
*/

function validate(email) {
  // Seperate parts of email
  let emailArray = email.split('@');

  // Check if contains exactly one '@'
  if (emailArray[2] !== undefined || emailArray[1] === undefined) {
    // Return 'false' if does not contain exactly '@'
    return false;
  }

  // Variable for checking dots
  let dotCheck = email.split('.');
  // Check if there are more than one '.' in a row
  for (let i = 0; i < dotCheck.length; i++) {
    // Check if one of the array elements are '' (if two dots together it would contain '')
    if (dotCheck[i] === '') {
      // Return false if '' is in array
      return false;
    }
  }

  // Variable for the local part of email
  let localPart = emailArray[0];

  // Check if localPart contains only letters, digits, dots, underscores and hypens
  if (localPart.match(/[^a-zA-Z0-9-_.]/)) {
    // Return false if contains other than above check
    return false;
  }

  // Check if localPart starts or ends with '.'
  if (localPart[0] === '.' || localPart[localPart.length - 1] === '.') {
    // Return false if starts or ends with '.'
    return false;
  }

  // Variable for domain part of email
  let domainPart = emailArray[1];

  // Variable to check domain
  let domainCheck = domainPart.split('.');

  // Check if domain contains at least one '.'
  if (domainCheck[1] === undefined) {
    // Return false if only one value in array
    return false;
  }

  // Check if ends in dot followed by two letters
  if (!domainCheck[domainCheck.length - 1].match(/[a-z]{2,}/i)) {
    // Return false if doesnt end in at least two letters
    return false;
  }

  console.log(dotCheck);

  // If passed all checks, return true
  return true;
}
