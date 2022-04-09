var searchButton = document.querySelector('search')
var librarySearchTerm = document.querySelector('username');


function searchLibrary() {
    var requestUrl = 'https://www.loc.gov/manuscripts/?q=' + librarySearchTerm + '&fo=json';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      });

}


  searchButton.addEventListener('click', searchLibrary);