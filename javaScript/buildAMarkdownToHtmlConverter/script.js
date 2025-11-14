const replacementPatterns = {
  h1: [/^[ ]*#[ ](.+$)/gm, '<h1>$1</h1>'],
  h2: [/^[ ]*#{2}[ ](.+$)/gm, '<h2>$1</h2>'],
  h3: [/^[ ]*#{3}[ ](.+$)/gm, '<h3>$1</h3>'],
  h4: [/^[ ]*#{4}[ ](.+$)/gm, '<h4>$1</h4>'],
  h5: [/^[ ]*#{5}[ ](.+$)/gm, '<h5>$1</h5>'],
  h6: [/^[ ]*#{6}[ ](.+$)/gm, '<h6>$1</h6>'],
  bold: [/[*]{2}(.*)[*]{2}|[_]{2}(.*)[_]{2}/gm, '<strong>$1$2</strong>'],
  italic: [/[*]{1}(.*)[*]{1}|[_]{1}(.*)[_]{1}/gm, '<em>$1$2</em>'],
  alt: [/!\[(.*)\]\((.*)\)/gm, `<img alt="$1" src="$2" />`],
  link: [/\[(.*)\]\((.*)\)/gm, `<a href="$2">$1</a>`],
  quote: [/^[ ]*> (.*)/gm, '<blockquote>$1</blockquote>'],
};

const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

function convertMarkdown() {
  let input = markdownInput.value;

  for (let pattern in replacementPatterns) {
    let regex = replacementPatterns[pattern][0];
    let html = replacementPatterns[pattern][1];

    input = input.replace(regex, html);
  }

  return input;
}

markdownInput.addEventListener('input', () => {
  let html = convertMarkdown();

  htmlOutput.textContent = html;
  preview.innerHTML = html;
});
