/*Given two sentences representing your team and an opposing team, where each word from 
your team battles the corresponding word from the opposing team, determine which team wins 
using the following rules:

-The given sentences will always contain the same number of words.
-Words are separated by a single space and will only contain letters.
-The value of each word is the sum of its letters.
-Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
-A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
-Words battle in order: the first word of your team battles the first word of the opposing team, 
and so on.
-A word wins if its value is greater than the opposing word's value.
-The team with more winning words is the winner.

Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both 
teams have the same number of wins. */

function battle(ourTeam, opponent) {
  let winStatement;

  // Seperate words into array
  let ourWords = ourTeam.split(' ');
  let oppWords = opponent.split(' ');

  // Array of values
  let ourValues = valueArray(ourWords);
  let oppValues = valueArray(oppWords);

  // Variables for round wins
  let ourWins = 0;
  let oppWins = 0;

  // Find battle length
  let lengthOfBattle = ourValues.length;

  // Loop for battling each round
  for (let i = 0; i < lengthOfBattle; i++) {
    if (ourValues[i] > oppValues[i]) {
      ourWins++;
      console.log(ourWins);
    } else if (ourValues[i] < oppValues[i]) {
      oppWins++;
      console.log(oppWins);
    }
  }

  // Find battle winner
  if (ourWins > oppWins) {
    winStatement = 'We win';
  } else if (ourWins < oppWins) {
    winStatement = 'We lose';
  } else if (ourWins === oppWins) {
    winStatement = 'Draw';
  }

  return winStatement;
}

// Find the value of word
function valueWord(word) {
  let wordValue = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      wordValue += (word[i].charCodeAt(0) - 64) * 2;
    } else if (word[i] === word[i].toLowerCase()) {
      wordValue += word[i].charCodeAt(0) - 96;
    }
  }

  return wordValue;
}

// Set the values of each word in an array
function valueArray(array) {
  let arrayOfValues = [];

  for (let i = 0; i < array.length; i++) {
    arrayOfValues[i] = valueWord(array[i]);
  }
  return arrayOfValues;
}

/*
1. battle("hello world", "hello word") should return "We win".
2. battle("Hello world", "hello world") should return "We win".
3. battle("lorem ipsum", "kitty ipsum") should return "We lose".
4. battle("hello world", "world hello") should return "Draw".
5. battle("git checkout", "git switch") should return "We win".
6. battle("Cheeseburger with fries", "Cheeseburger with Fries") should return "We lose".
7. battle("We must never surrender", "Our team must win") should return "Draw". 
*/
