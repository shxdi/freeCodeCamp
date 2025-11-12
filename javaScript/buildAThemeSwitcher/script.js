const themesArr = [
  { name: 'preferred', message: 'This is your preferred theme' },
  { name: 'light', message: 'This is the light theme' },
  { name: 'dark', message: 'This is the dark theme' },
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
