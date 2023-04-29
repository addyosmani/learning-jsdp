export function createSearch() {
    const search = document.createElement('input');
    search.setAttribute('type', 'text');
    search.setAttribute('placeholder', 'Search for dog images...');
    search.classList.add('search');
    return search;
  }
  