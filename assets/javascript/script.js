// Search variables and function

var searchForm = document.querySelector('#search-form'); // ID or class of whatever search form

function searchSubmission(event) {
    event.preventDefault();

    // Whatever the user types in the search box
    var inputSearchEL = document.querySelector('search-input').value;

    //If user doesn't type anything - returns this
    if (!inputSearchEL) {
        console.error('Please enter Anime title!');
        return;
    }

}
//This code is for the fetch api//const encodedParams = new URLSearchParams();//
encodedParams.append("accessToken", "<REQUIRED>");
encodedParams.append("userId", "<REQUIRED>");

const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'Anilistmikilior1V1.p.rapidapi.com',
        'X-RapidAPI-Key': 'cfbae33ec0mshf109c03e93a6396p1b5151jsnff154fb8b1f8'
    },
    body: encodedParams
};

fetch('https://anilistmikilior1v1.p.rapidapi.com/getAnimeList', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));