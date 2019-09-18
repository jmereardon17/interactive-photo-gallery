var search;
var searchStr;
var photoLinks;
var searchTerms = [];

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

// Attach an event listener that listens for values entered into the search element
// search.addEventListener("keyup", function() {
//   // Loop through the link elements array and get their attributes containing the image keywords
//   for (var i = 0; i < photoLinks.length; i += 1) {
//     let keyword = photoLinks[i].getAttribute("data-keywords").toLowerCase();
//     // Get the value of the user's search input
//     searchStr = search.value.toLowerCase();
//     // Look for the index value of the user's search and return any images that are found
//     if ( keyword.indexOf(searchStr) > -1 ) {
//       // if true, display the images that match the search value
//       photoLinks[i].parentElement.style = "display:block;";
//     }
//     // If the user enters multiple search terms is true, display the images that match the search terms
//     else if ( imageContent[i].title.toLowerCase() === searchStr) {
//       console.log("true");
//     } else {
//       // if both conditions are false, hide the images that doesn't match the search values
//       photoLinks[i].parentElement.style = "display:none;";
//     }
//   }
// });

search.addEventListener("keyup", function(){
  for (let i = 0; i < imageContent.length; i += 1) {

    let caption = imageContent[i].caption.toLowerCase();
    let title = imageContent[i].title.toLowerCase();
    searchStr = search.value.toLowerCase();

    // Check to see if the caption matches the search input
    if ( caption.indexOf(searchStr) > -1 ) {
      photoLinks[i].parentElement.style = "display:block;";
      // Check to see if the title matches the search input
    } else if ( title.indexOf(searchStr) > -1 ) {
      photoLinks[i].parentElement.style = "display:block;";
      // Check to see if the search term array values matches any of the image titles
    } else {
      if ( searchStr.includes(",") ) {
        searchTerms = searchStr.trim().split(', ');
        for (var j = 0; j < searchTerms.length; j += 1) {
          let term = searchTerms[j];
          if ( title.indexOf(term) > -1 ) {
           photoLinks[j].parentElement.style = "display:block;";
          } else {
            photoLinks[i].parentElement.style = "display:none";
          }
        }
      }
    }
  }
});
