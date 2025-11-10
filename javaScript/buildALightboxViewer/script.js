const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

gallery.addEventListener('click', (event) => {
  if (event.target.classList.contains('gallery-item')) {
    lightbox.classList.add('show');
  }
});
