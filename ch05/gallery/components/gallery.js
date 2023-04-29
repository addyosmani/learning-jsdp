import { createPhoto } from './photo.js';

export async function createGallery() {
  const gallery = document.createElement('div');
  gallery.classList.add('gallery');

  const photos = await fetchDogImages();

  for (const photo of photos) {
    const photoElement = await createPhoto(photo.url, 'Cute Dog');
    gallery.appendChild(photoElement);
  }

  return gallery;
}

async function fetchDogImages() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
  const data = await response.json();
  return data.message.map(url => ({ url }));
}
