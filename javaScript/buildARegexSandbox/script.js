const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');
const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

function getFlags() {
  let flags = '';

  if (globalFlag.checked) {
    flags += 'g';
  }

  if (caseInsensitiveFlag.checked) {
    flags += 'i';
  }

  return flags;
}

testButton.addEventListener('click', () => {
  let flags = getFlags();
  let regex = RegExp('(' + regexPattern.value + ')', flags);
  let string = stringToTest.textContent;

  let hightlighted = string.replace(regex, `<span class='highlight'>$1</span>`);

  stringToTest.innerHTML = hightlighted;

  // Redefine because captured group was not working with match()
  regex = RegExp(regexPattern.value, flags);

  let matched = string.match(regex);

  if (matched) {
    testResult.textContent = matched.join(', ');
  } else {
    testResult.textContent = 'no match';
  }
});
