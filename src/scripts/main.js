'use strict';

const gallery = document.querySelector('.gallery');

const changeImage = (eventElement) => {
  eventElement.preventDefault();

  const largePrevious = document.querySelector('.gallery__large-img');
  largePrevious.src = eventElement.target.src;
  
};

gallery.addEventListener('click', changeImage);
