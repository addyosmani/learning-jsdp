export function createImage(src, alt) {
  const image = document.createElement('img');
  image.setAttribute('src', src);
  image.setAttribute('alt', alt);
  image.classList.add('image');
  return image;
}
