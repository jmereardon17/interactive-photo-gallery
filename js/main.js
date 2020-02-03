const container = document.querySelector('.container');

const displayGallery = array => {
  let html = `<ul class="gallery">`;
  array.forEach(item => {
    html += `<li class="gallery__item">
               <a class="gallery__link" href="img/${item.file}" data-lightbox="scenery" data-title="${item.caption}" data-keywords="${item.title}">
                 <img src="img/thumbnails/${item.file}" alt="${item.title} Image">
               </a>
            </li>`
  });
  html += `</ul>`;
  container.innerHTML += html;
}

displayGallery(images);

window.addEventListener('load', () => {
  const searchField = document.getElementById('searchInput');
  const photoLinks = document.querySelectorAll('.gallery__link');

  const filterImages = input => {
    images.forEach((image, index) => {
      photoLinks[index].parentElement.style.display = 'none';
      let imageTitle = image.title.toLowerCase();
      let imageCaption = image.caption.toLowerCase();
      if (Array.isArray(input)) {
        input.forEach(term => {
          if (imageTitle.indexOf(term) > -1) {
            photoLinks[index].parentElement.style.display = '';
          }
        });
      } else {
        imageCaption.indexOf(input) > -1 || imageTitle.indexOf(input) > -1
        ? photoLinks[index].parentElement.style.display = ''
        : photoLinks[index].parentElement.style.display = 'none';
      }
    });
  }

  const getSearchTermsAsArray = input => {
    let searchTerms = input.replace(/\s/g, "").trim().split(',');
    searchTerms.forEach(term => {
      if (term === undefined || term === '') {
        searchTerms.splice(term, 1);
      }
    });
    return searchTerms;
  }

  searchField.addEventListener('keyup', () => {
    let userInput = searchField.value.toLowerCase();
    userInput.includes(',') ? filterImages(getSearchTermsAsArray(userInput)) : filterImages(userInput);
  });
});

// Customize Lightbox2 plugin options
lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'fadeDuration': 600,
  'imageFadeDuration': 1000,
  'resizeDuration': 600,
  'showImageNumberLabel': false
});