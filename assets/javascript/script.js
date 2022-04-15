// Search variables and function

var searchForm = document.querySelector('#search-form'); // ID or class of whatever search form

function searchSubmission(event){
    event.preventDefault();

    // Whatever the user types in the search box
    var inputSearchEL = document.querySelector('search-input').value; 

    //If user doesn't type anything - returns this
    if (!inputSearchEL){
        console.error('Please enter Anime title!');
        return;
    }
    
}

searchForm.addEventListener('submit', searchSubmission);