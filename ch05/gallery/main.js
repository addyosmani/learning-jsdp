import { createHeader } from './components/header.js';
import { createGallery } from './components/gallery.js';

(async function () {
  document.body.appendChild(createHeader());
  document.body.appendChild(await createGallery());
})();
