var searchForm = document.querySelector("#search-form");

function searchSubmission(event) {
    event.preventDefault();

    var inputSearchEL = document.querySelector("#search-input").values();

    if (!inputSearchEL) {
        console.error('Please enter Anime title!');
        return;
    }
}




// var buttonEl = document.querySelector("button");
var caseK = "AIzaSyAuXIW5JqAMLqXas2a7CADZA-elSAnHb5w";
var vidIdTag;
var vidUrl;

function onSearch(searchValue) {
    var requestURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + searchValue + "%20trailer&key=" + caseK;
    fetch(requestURL)
        .then(function(response) {
            console.log(response);
            return response.json();
        }).then(function(data) {
            vidIdTag = data.items[0].id.videoId;
            vidUrl = "https://www.youtube.com/watch?v=" + vidIdTag;
            console.log(vidIdTag);
            console.log(vidUrl);
            console.log(data);
        }).catch(function(error) {
            console.log(error);
        })
}

//buttonEl.addEventListener("click", function(event){
//    event.preventDefault()
//    var value = searchForm.value;
//    console.log(value);
//    onSearch(value);
//})

searchForm.addEventListener('submit', searchSubmission);
    event.preventDefault()
    var value = searchForm.value;
    console.log(value);
    onSearch(value);
searchForm.addEventListener('submit', function(event) {

    event.preventDefault();
    var value = searchForm.value;
    console.log(value);
    onSearch(value);
});
