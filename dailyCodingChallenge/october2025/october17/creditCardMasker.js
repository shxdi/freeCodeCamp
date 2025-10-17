/*
Credit Card Masker
Given a string of credit card numbers, return a masked version of it using the following 
constraints:

The string will contain four sets of four digits (0-9), with all sets being separated by a 
single space, or a single hyphen (-).
Replace all numbers, except the last four, with an asterisk (*).
Leave the remaining characters unchanged.

For example, given "4012-8888-8888-1881" return "****-****-****-1881".
*/

/*
1. mask("4012-8888-8888-1881") should return "****-****-****-1881".
2. mask("5105 1051 0510 5100") should return "**** **** **** 5100".
3. mask("6011 1111 1111 1117") should return "**** **** **** 1117".
4. mask("2223-0000-4845-0010") should return "****-****-****-0010".
*/

function mask(card) {
  // Variable for what seperates the number sets
  let seperator = card[4];

  // Array for the number sets
  let numberSets = card.split(seperator);
  // Varible for length of numberSets
  let setsAmount = numberSets.length;

  // Variable for the last number set
  let lastSet = numberSets[setsAmount - 1];

  // Variable for masked set
  let maskedSet = '****';

  // Variable to return with masked card
  let maskedCard = '';

  // Loop adding masked sets for all but last set of numbers
  for (let i = 0; i < setsAmount - 1; i++) {
    maskedCard += maskedSet + seperator;
  }

  // Finally add the lastSet to maskedCard
  maskedCard += lastSet;

  return maskedCard;
}
