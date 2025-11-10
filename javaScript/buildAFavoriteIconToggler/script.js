const btns = document.querySelectorAll('.favorite-icon');

btns.forEach((btn) => btn.addEventListener('click', () => toggleBtn(btn)));

function toggleBtn(btn) {
  if (btn.className.includes('filled')) {
    btn.classList.remove('filled');
    btn.innerHTML = '&#9825';
  } else {
    btn.classList.add('filled');
    btn.innerHTML = '&#10084';
  }
}
