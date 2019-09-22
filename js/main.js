let search;
let searchStr;
let photoLinks;
let searchTerms = [];

const getSearchTermsAsArray = (input) => {
  searchTerms = input.replace(/\s/g, "").trim().split(',');
  return searchTerms;
}

const checkSearchTerms = (array) => {
  for (let i = 0; i < imageContent.length; i += 1) {
    let term = array[i];
    let title = imageContent[i].title.toLowerCase();
    if ( title.indexOf(term) > -1 ) {
      photoLinks[i].parentElement.style = "display:block;";
    } else {
      photoLinks[i].parentElement.style = "display:none;";
    }
  }
}

// Customize Lightbox2 plugin options
lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'fadeDuration': 600,
  'imageFadeDuration': 1000,
  'resizeDuration': 600,
  'showImageNumberLabel': false
});

/*
  Search filter for image gallery
*/

// Get html search input element
search = document.getElementById("searchInput");

// Get html link elements to get to values (creates fake array)
photoLinks = document.querySelectorAll(".gallery__link");

// Attach an event listener to the search button with the "keyup" event
// search.addEventListener("keyup", function(){
//   for (let i = 0; i < imageContent.length; i += 1) {

//     let caption = imageContent[i].caption.toLowerCase();
//     let title = imageContent[i].title.toLowerCase();
//     searchStr = search.value.toLowerCase();

//     // Check to see if the caption matches the search input
//     if ( caption.indexOf(searchStr) > -1 ) {
//       photoLinks[i].parentElement.style = "display:block;";
//       // Check to see if the title matches the search input
//     } else if ( title.indexOf(searchStr) > -1 ) {
//       photoLinks[i].parentElement.style = "display:block;";
//       // Check to see if the search term array values matches any of the image titles
//     } else {
//       if ( searchStr.includes(",") ) {
//         getSearchTermsAsArray(searchStr);
//         checkSearchTerms(searchStr);
//       }
//     }
//   }
// });

search.addEventListener('keyup', function(){
  for (let i = 0; i < imageContent.length; i += 1) {

    let caption = imageContent[i].caption.toLowerCase();
    let title = imageContent[i].title.toLowerCase();
    searchStr = search.value.toLowerCase();

    if (searchStr.includes(',')) {
      getSearchTermsAsArray(searchStr);
      checkSearchTerms(searchTerms);
    } else {
      if (caption.indexOf(searchStr) > -1) {
        photoLinks[i].parentElement.style = "display: block;";
      } else if (title.indexOf(searchStr) > -1) {
        photoLinks[i].parentElement.style = "display: block;";
      } else {
        photoLinks[i].parentElement.style = "display: none;";
      }
    }

  }
});
