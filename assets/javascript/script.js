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
const data = "accessToken=%3CREQUIRED%3E&userId=%3CREQUIRED%3E";

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("POST", "https://anilistmikilior1v1.p.rapidapi.com/getAnimeList");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("X-RapidAPI-Host", "Anilistmikilior1V1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "cfbae33ec0mshf109c03e93a6396p1b5151jsnff154fb8b1f8");

xhr.send(data);

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
        "userId": "<REQUIRED>"
    }
};

$.ajax(settings).done(function(response) {
    console.log(response);
});
import axios from "axios";

const encodedParams = new URLSearchParams();
encodedParams.append("accessToken", "<REQUIRED>");
encodedParams.append("userId", "<REQUIRED>");

const options = {
    method: 'POST',
    url: 'https://anilistmikilior1v1.p.rapidapi.com/getAnimeList',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'Anilistmikilior1V1.p.rapidapi.com',
        'X-RapidAPI-Key': 'cfbae33ec0mshf109c03e93a6396p1b5151jsnff154fb8b1f8'
    },
    data: encodedParams
};

axios.request(options).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.error(error);
});