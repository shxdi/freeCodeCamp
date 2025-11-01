/*
Given a message string, a secret key string, and a signature number, determine if the 
signature is valid using this encoding method:

Letters in the message and secret key have these values:
a to z have values 1 to 26 respectively.
A to Z have values 27 to 52 respectively.
All other characters have no value.
Compute the signature by taking the sum of the message plus the sum of the secret key.
For example, given the message "foo" and the secret key "bar", the signature would be 57:

f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57
Check if the computed signature matches the provided signature.
*/

/*
1. verify("foo", "bar", 57) should return true.
2. verify("foo", "bar", 54) should return false.
3. verify("freeCodeCamp", "Rocks", 238) should return true.
4. verify("Is this valid?", "No", 210) should return false.
5. verify("Is this valid?", "Yes", 233) should return true.
6. verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514) should return true
*/

function verify(message, key, signature) {
  let messageValue = 0;
  let keyValue = 0;

  let messageChars = message.split('');
  let keyChars = key.split('');

  let lowerPattern = /[a-z]/g;
  let upperPattern = /[A-Z]/g;

  for (let i = 0; i < messageChars.length; i++) {
    if (messageChars[i].match(lowerPattern)) {
      messageValue += messageChars[i].charCodeAt() - 96;
    } else if (messageChars[i].match(upperPattern)) {
      messageValue += messageChars[i].charCodeAt() - 38;
    }
  }

  for (let i = 0; i < keyChars.length; i++) {
    if (keyChars[i].match(lowerPattern)) {
      keyValue += keyChars[i].charCodeAt() - 96;
    } else if (keyChars[i].match(upperPattern)) {
      keyValue += keyChars[i].charCodeAt() - 38;
    }
  }

  let sigValue = messageValue + keyValue;

  if (signature === sigValue) {
    return true;
  } else {
    return false;
  }
  return;
}
