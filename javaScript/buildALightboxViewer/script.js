const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.getElementById('lightbox-image');

gallery.addEventListener('click', (event) => {
  if (!event.target.classList.contains('gallery-item')) {
    return;
  }

  let imgSrc = event.target.getAttribute('src');
  let newImgSrc = imgSrc.replace('-thumbnail', '');

  lightbox.classList.add('show');
  lightboxImg.setAttribute('src', newImgSrc);
});
