const textArea = document.querySelector('textarea');
const charCount = document.querySelector('#char-count');

function updateCount() {
  let currentChars = textArea.value.length;

  charCount.innerHTML = `<p id="char-count">Character Count: ${currentChars}/50</p>`;
}

/*
<!--
This placeholder text of <p> should be replaced with the current count of characters in the 
textarea element.

When the #text-input element contains the text hello coder the #char-count element should 
contain the text "Character Count: 11/50"

When the #text-input element contains the text i am a programmer the #char-count element 
should contain the text "Character Count: 17/50"

When the #text-input element contains the text hello world the #char-count element should 
contain the text "Character Count: 11/50"

When the #text-input element contains the text I am learning a new language and it is called 
c++. the #char-count element should contain the text "Character Count: 50/50". NOTE: While 
the maxlength attribute would achieve the correct functionality, this lab requires a 
JavaScript only solution.

The user should not be able to enter more than 50 characters in the textarea element. When 
the character count reaches 50, any extra input should be automatically trimmed and the text 
Character Count: 50/50 should be displayed in red.
-->
*/
