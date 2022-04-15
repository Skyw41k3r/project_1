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

searchForm.addEventListener('submit', searchSubmission);
//This line is the anime list animeList//
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://anilistmikilior1v1.p.rapidapi.com/getAnimeList",
    "method": "POST",
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Host": "Anilistmikilior1V1.p.rapidapi.com",
        "X-RapidAPI-Key": "cfbae33ec0mshf109c03e93a6396p1b5151jsnff154fb8b1f8"
    },
    "data": {
        "accessToken": "<REQUIRED>",
        "userId": "animeList"
    }
};

$.ajax(settings).done(function(response) {
    console.log(response);
});

//this line is the anime review(animeRev)
const setting2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://anilistmikilior1v1.p.rapidapi.com/getReviews",
    "method": "POST",
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Host": "Anilistmikilior1V1.p.rapidapi.com",
        "X-RapidAPI-Key": "cfbae33ec0mshf109c03e93a6396p1b5151jsnff154fb8b1f8"
    },
    "data": {
        "seriesType": "<REQUIRED>",
        "id": "animeRev",
        "accessToken": "<REQUIRED>"
    }
};

$.ajax(settings).done(function(response) {
    console.log(response);
});