/*
Given a string in camel case, return the snake case version of the string using the following 
    rules:

The input string will contain only letters (A-Z and a-z) and will always start with a lowercase 
    letter.
Every uppercase letter in the camel case string starts a new word.
Convert all letters to lowercase.
Separate words with an underscore (_).
*/

/*
1. toSnake("helloWorld") should return "hello_world".
2. toSnake("myVariableName") should return "my_variable_name".
3. toSnake("freecodecampDailyChallenges") should return "freecodecamp_daily_challenges".
*/

function toSnake(camel) {
  let snake = '';

  for (let i = 0; i < camel.length; i++) {
    if (camel[i].toUpperCase() === camel[i]) {
      snake += `_${camel[i].toLowerCase()}`;
    } else {
      snake += camel[i];
    }
  }

  return snake;
}
