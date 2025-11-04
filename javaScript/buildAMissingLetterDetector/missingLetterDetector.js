function fearNotLetter(str) {
  str = str.toLowerCase();
  let charCode = str.charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    let currentCharCode = str.charCodeAt(i);

    if (charCode !== currentCharCode) {
      return String.fromCharCode(charCode);
    }

    charCode++;
  }
}
