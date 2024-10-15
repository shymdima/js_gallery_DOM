'use strict';

const gallery = document.querySelector('.gallery');

const changeImage = (eventElement) => {
  const largePrevious = document.querySelector('.gallery__large-img');

  largePrevious.src = eventElement.target.src;
  eventElement.preventDefault();
};

gallery.addEventListener('click', changeImage);
