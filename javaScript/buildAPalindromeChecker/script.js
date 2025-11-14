const button = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  let input = textInput.value.toLowerCase();

  if (input === '') {
    alert('Please input a value');
  }

  let strForwards = removeNonWordChar(input);
  let strBackwards = strForwards.split('').reverse().join('');

  if (strForwards === strBackwards) {
    result.innerHTML = `${input} is a palindrome`;
  } else {
    result.innerHTML = `${input} is not a palindrome`;
  }
});

function removeNonWordChar(str) {
  let reducedInput = '';
  let regex = /[a-z0-9]/i;

  for (let char of str) {
    if (regex.test(char)) {
      reducedInput += char;
    }
  }

  return reducedInput;
}
