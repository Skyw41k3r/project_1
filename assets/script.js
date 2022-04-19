var searchForm = document.querySelector("#animeSearchBar");
var buttonEl = document.querySelector("#animeBtn");
var caseK = "AIzaSyAuXIW5JqAMLqXas2a7CADZA-elSAnHb5w";
var vidIdTag;
var vidUrl;

function searchSubmission(event) {
    event.preventDefault();

    var value = searchForm.value;
    console.log(value);
    if (!value) {
        console.error('Please enter Anime title!');
        alert("Please enter Anime title!");
        return;
    }
    onSearch(value);
    onAnimeSearch(value);
}
var embed = function (vidIdTag) {
    var embedlink = "https://www.youtube.com/embed/" + vidIdTag;
    document.getElementById("myIframe").src = embedlink;
}
function onSearch(searchValue) {
    var requestURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + searchValue + "%20trailer&key=" + caseK;
    fetch(requestURL)
        .then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (data) {
            vidIdTag = data.items[0].id.videoId;
            vidUrl = "https://www.youtube.com/watch?v=" + vidIdTag;
            embed(vidIdTag)
            console.log(vidIdTag);
            console.log(vidUrl);
            console.log(data);
        }).catch(function (error) {
            console.log(error);
        })
    //    var embed = function(url) {
    //   var id = url.split("?v=")[1]; //sGbxmsDFVnE
    //             var embedlink = "https://www.youtube.com/embed/" + vidIdTag; //https://www.youtube.com/embed/sGbxmsDFVnE
    //             document.getElementById("myIframe").src = embedlink;
    //         }

    //         embed("https://www.youtube.com/watch?v=sGbxmsDFVnE");
}

function onAnimeSearch(searchValue) {
    var requestURL = "https://api.jikan.moe/v4/anime?q=" + searchValue
    fetch(requestURL)
        .then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.log(error);
        })
}

//document.getElementById("animeBtn").addEventListener("submit", function(event){
//    event.preventDefault()
//    var value = document.getElementById("animeSearchBar").value;
//    console.log(value);
//    onAnimeSearch(value);
//})

buttonEl.addEventListener("click", searchSubmission)

//searchForm.addEventListener('submit', searchSubmission);
//    event.preventDefault()
//    var value = searchForm.value;
//    console.log(value);
//    onSearch(value);
//searchForm.addEventListener('submit', function(event) {

//    event.preventDefault();
//    var value = searchForm.value;
//    console.log(value);
//    onSearch(value);
//});
