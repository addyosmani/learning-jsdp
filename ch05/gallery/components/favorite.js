let favoriteDogs = [];

export function toggleFavoriteDog(photo) {
  photo.classList.toggle('favorite');
  const photoUrl = photo.querySelector('img').getAttribute('src');

  if (photo.classList.contains('favorite')) {
    favoriteDogs.push(photoUrl);
  } else {
    favoriteDogs = favoriteDogs.filter(url => url !== photoUrl);
  }

  console.log('Favorite dogs:', favoriteDogs);
}

export function addFavoriteCheckboxes(gallery) {
  const photos = gallery.querySelectorAll('.photo');
  photos.forEach(photo => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('favorite-checkbox');
    checkbox.addEventListener('change', () => toggleFavoriteDog(photo));
    photo.appendChild(checkbox);
  });
}
