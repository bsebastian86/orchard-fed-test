'use strict';

const body = document.body;
const links = document.querySelectorAll('a');
const modalOverlay = document.getElementsByClassName('modal-overlay')[0];
const modalImg = document.querySelector('.modal-image');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(link.dataset.title);

    if (link.classList.contains('grid-img')) {
      body.style.overflow = 'hidden';
      modalOverlay.classList.add('show');

      const imgSrc = link.querySelector('img').src;
      modalImg.src = imgSrc;
    }

    return true;
  });
});

modalOverlay.addEventListener('click', () => {
  modalOverlay.classList.remove('show');
  body.style.overflow = 'auto';

  return true;
});

// Prevent bubbling up the DOM - will not close modal
modalImg.addEventListener('click', (e) => {
  e.stopPropagation();

  return true;
});
