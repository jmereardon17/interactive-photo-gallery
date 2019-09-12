var search;
var searchStr;
var photoLinks;

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
search = document.getElementById('searchInput');

// Get html link elements to get to values (creates fake array)
photoLinks = document.querySelectorAll('.gallery__link');

// Attach an event listener that listens for values entered into the search element
search.addEventListener('keyup', function(){
  // Loop through the link elements array and get their attributes containing the image keywords
  for (var i = 0; i < photoLinks.length; i += 1) {
    let keyword = photoLinks[i].getAttribute('data-keywords').toLowerCase();
    // Get the value of the user's search input
    searchStr = search.value.toLowerCase();
    // Look for the index value of the user's search and return any images that are found
    if (keyword.indexOf(searchStr) > -1) {
      // if true, display the images that match the search value
      photoLinks[i].parentElement.style = "display:block;";
    } else {
      // if false, hide the images that doesn't match the search value
      photoLinks[i].parentElement.style = "display:none;";
    }
  }

});
