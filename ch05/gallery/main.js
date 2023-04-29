import { createHeader } from './components/header.js';
import { createSearch } from './components/search.js';
import { createGallery } from './components/gallery.js';

(async function () {
  document.body.appendChild(createHeader());
  document.body.appendChild(createSearch());
  document.body.appendChild(await createGallery());
})();
