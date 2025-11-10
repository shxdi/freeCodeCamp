const textArea = document.querySelector('textarea');
const charCount = document.querySelector('#char-count');

function updateCount() {
  let currentChars = textArea.value.length;

  if (currentChars > 49) {
    textArea.value = textArea.value.slice(0, 50);
    charCount.innerHTML = `<p id="char-count">Character Count: 50/50</p>`;
    charCount.classList.add('red');
  } else {
    charCount.innerHTML = `<p id="char-count">Character Count: ${currentChars}/50</p>`;
    charCount.classList.remove('red');
  }
}

textArea.addEventListener('input', updateCount);
