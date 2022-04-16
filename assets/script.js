var searchEl = document.querySelector("#search");
var buttonEl = document.querySelector("button");
var caseK = "AIzaSyAuXIW5JqAMLqXas2a7CADZA-elSAnHb5w";
var vidIdTag;
var vidUrl;

function onSearch(searchValue) {
    var requestURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + searchValue + "%20trailer&key=" + caseK;
    fetch(requestURL) 
    .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(data){
        vidIdTag = data.items[0].id.videoId;
        vidUrl = "https://www.youtube.com/watch?v=" + vidIdTag;
        console.log(vidIdTag);
        console.log (vidUrl);
        console.log(data);
    }).catch(function(error){
        console.log(error);
    })
}

buttonEl.addEventListener("click", function(event){
    event.preventDefault()
    var value = searchEl.value;
    console.log(value);
    onSearch(value);
})