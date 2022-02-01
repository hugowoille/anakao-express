'use strict';

const scrollDown = document.querySelector('.btn-tarif');

scrollDown.addEventListener('click', () => {
  window.scrollTo({
    top: 1050,
    behavior: 'smooth',
  });
});
