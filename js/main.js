const searchField = document.getElementById('searchInput');
const imageLinks = document.querySelectorAll('.gallery__link');

/* ******************************************* 
  HELPER FUNCTIONS
********************************************* */

const toggleImage = (image, state) => {
  image.style.display = state;
}

const filterImages = input => {
  images.forEach((image, index) => {
    const galleryItem = imageLinks[index].parentElement;
    let imageTitle = image.title.toLowerCase();
    let imageCaption = image.caption.toLowerCase();
    toggleImage(galleryItem, 'none');
    if (Array.isArray(input)) {
      input.forEach(term => {
        if (imageTitle.indexOf(term) > -1) {
          toggleImage(galleryItem, '');
        }
      });
    } else {
      imageCaption.indexOf(input) > -1 || imageTitle.indexOf(input) > -1
        ? toggleImage(galleryItem, '')
        : toggleImage(galleryItem, 'none');
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

/* *******************************************
  Event Listeners
********************************************* */

searchField.addEventListener('input', () => {
  let userInput = searchField.value.toLowerCase();
  if (userInput === '') {
    imageLinks.forEach(image => {
      const galleryItem = image.parentElement;
      galleryItem.style.display = '';
    });
  }
  userInput.includes(',') ? filterImages(getSearchTermsAsArray(userInput)) : filterImages(userInput);
});

/* *******************************************
  PLUGIN OPTIONS
********************************************* */

lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'fadeDuration': 600,
  'imageFadeDuration': 1000,
  'resizeDuration': 600,
  'showImageNumberLabel': false
});