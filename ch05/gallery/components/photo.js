import { createImage } from './image.js';

export function createPhoto(src, alt) {
  const photo = document.createElement('div');
  photo.classList.add('photo');
  photo.appendChild(createImage(src, alt));
  return photo;
}
