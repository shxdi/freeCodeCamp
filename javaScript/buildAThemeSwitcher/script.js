const themes = [
  { name: 'preferred', message: 'This is your preferred theme.' },
  { name: 'light', message: 'This is the light theme.' },
  { name: 'dark', message: 'This is the dark theme.' },
];

const themeBtn = document.getElementById('theme-switcher-button');
const themeDropdown = document.getElementById('theme-dropdown');

themeBtn.addEventListener('click', () => {
  let isExpanded = themeBtn.getAttribute('aria-expanded');

  if (isExpanded === 'true') {
    themeBtn.setAttribute('aria-expanded', 'false');
    themeDropdown.toggleAttribute('hidden');
  } else {
    themeBtn.setAttribute('aria-expanded', 'true');
    themeDropdown.toggleAttribute('hidden');
  }
});

const body = document.querySelector('body');
const themeMsg = document.getElementById('theme-message');

let preferredTheme;

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  preferredTheme = 'dark';
} else {
  preferredTheme = 'light';
}

themeDropdown.addEventListener('click', (event) => {
  let themeName = event.target.getAttribute('id');
  let msg;

  themesArr.forEach((theme) => {
    if (theme.name === themeName.slice(6)) {
      msg = theme.message;
    }
  });

  body.setAttribute('class', themeName);
  themeMsg.innerHTML = msg;
  console.log(themeName);

  if (themeName === 'theme-preferred' && preferredTheme === 'dark') {
    body.classList.add('theme-dark');
  }

  themeBtn.setAttribute('aria-expanded', 'false');
  themeDropdown.toggleAttribute('hidden');
});
