/*
Given a message string and a validation string, determine if the message is valid.

A message is valid if each word in the message starts with the corresponding letter in the 
    validation string, in order.
Letters are case-insensitive.
Words in the message are separated by single spaces.
*/

/*
1. isValidMessage("hello world", "hw") should return true.
2. isValidMessage("ALL CAPITAL LETTERS", "acl") should return true.
3. isValidMessage("Coding challenge are boring.", "cca") should return false.
4. isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD") should 
    return true.
5. isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT") should 
    return false.
*/

function isValidMessage(message, validator) {
  const words = message.split(' ');

  if (words.length !== validator.length) {
    return false;
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i][0].toLowerCase() !== validator[i].toLowerCase()) {
      return false;
    }
  }

  return true;
}
