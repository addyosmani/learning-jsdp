import { createPhoto } from './photo.js';

export async function createGallery() {
  const gallery = document.createElement('div');
  gallery.classList.add('gallery');

  let photos;
  try {
    photos = await fetchDogImages();
  } catch (error) {
    console.log('Error fetching dog images:', error);
    // Fallback to local JSON file
    photos = await fetchBackupDogImages();
  }

  for (const photo of photos) {
    const photoElement = await createPhoto(photo.url, 'Cute Dog');
    gallery.appendChild(photoElement);
  }

  // Only used for the dynamic import version
  // Add the button
  const favoriteButton = document.createElement('button');
  favoriteButton.textContent = 'Select your favorite dogs';
  favoriteButton.classList.add('favorite-button');
  favoriteButton.addEventListener('click', async () => {
    const { addFavoriteCheckboxes } = await import('./favorite.js');
    addFavoriteCheckboxes(gallery);
    favoriteButton.remove(); // remove the button after clicking
  });

  gallery.appendChild(favoriteButton);
  //

  return gallery;
}

async function fetchDogImages() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
  const data = await response.json();
  return data.message.map(url => ({ url }));
}

async function fetchBackupDogImages() {
  const response = await fetch('gallery/backup-dogs.json');
  const data = await response.json();
  return data.map(url => ({ url }));
}
