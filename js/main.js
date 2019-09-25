// Customize Lightbox2 plugin options
lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'fadeDuration': 600,
  'imageFadeDuration': 1000,
  'resizeDuration': 600,
  'showImageNumberLabel': false
});

/*
  Image gallery search filter
*/

let search;
let searchStr;
let photoLinks;
let searchTerms = [];

const getSearchTermsAsArray = (input) => {
  searchTerms = input.replace(/\s/g, "").trim().split(',');
  // Remove all whitespace elements in the array and return a valid keyword array
  for (let j = 0; j < searchTerms.length; j += 1) {
    if (searchTerms[j] === undefined || searchTerms[j] == "") {
      searchTerms.splice(j, 1);
      j--;
    }
  }
  return searchTerms;
}

// const checkSearchTerms = (array) => {
//   for (let k = 0; k < imageContent.length; k += 1) {
//     let term = array[k];
//     let title = imageContent[k].title.toLowerCase();
//     if ( title.indexOf(term) > -1 ) {
//       photoLinks[k].parentElement.style = "display:block;";
//     } else {
//       photoLinks[k].parentElement.style = "display:none;";
//     }
//   }
// }

const checkSearchTerms = (array) => {
  for (let k = 0; k < imageContent.length; k += 1) {
      photoLinks[k].parentElement.style = "display:none;";

      let title = imageContent[k].title.toLowerCase();

      for (let l = 0; l < array.length; l++) {
          let term = array[l];

          if (title.indexOf(term) > -1) {
              photoLinks[k].parentElement.style = "display:block;";
          }
      }
  }
}

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
