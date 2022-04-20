var searchForm = document.querySelector("#animeSearchBar");
var buttonEl = document.querySelector("#animeBtn");
var caseK = "AIzaSyAuXIW5JqAMLqXas2a7CADZA-elSAnHb5w";
var vidIdTag;
var vidUrl;

function searchSubmission(event) {
    event.preventDefault();
    var inputSearchEL = searchForm.value;
    console.log(inputSearchEL);
    if (!inputSearchEL) {
        alert("Please enter Anime title!");
        return;
    }
    onSearch(inputSearchEL);
    onAnimeSearch(inputSearchEL);
}
var embed = function (vidIdTag) {
    var embedlink = "https://www.youtube.com/embed/" + vidIdTag;
    document.getElementById("myIframe").src = embedlink;
}
function onSearch(searchValue) {
    var requestURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + searchValue + "%20anime%20trailer&key=" + caseK;
    fetch(requestURL)
        .then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (data) {
            vidIdTag = data.items[0].id.videoId;
            embed(vidIdTag)
            console.log(vidIdTag);
            console.log(data);
        }).catch(function (error) {
            console.log(error);
        })
}


function displayIndividualAnimeDetails(anime) {
    console.log(anime);
    var animeScore = anime.score;
    if (animeScore != null) {
    document.getElementById('selectedCardDisplayArea').innerHTML = `
                                                                    <div>
                                                                        <h1>${anime.title}</h1>
                                                                        <h6>${anime.synopsis}</h6>
                                                                        <div>${anime.score}</div>
                                                                    </div>
                                                                `;
    }
    else {
        document.getElementById('selectedCardDisplayArea').innerHTML = `
                                                                    <div>
                                                                        <h1>${anime.title}</h1>
                                                                        <h6>${anime.synopsis}</h6>
                                                                    </div>
                                                                `;
    }                                                            
}

function displayAnimeCards(animes) {
    let cardsMarkup = '';

    animes.forEach((anime, index) => {
        cardsMarkup += `<a href="#" class="card" data-card-index="${index}">
                            <div class="card__image">
                                <img loading="lazy" src="${anime.images.jpg.large_image_url}" alt="Cowboy Bebop">
                            </div>
                            <div class="card__name">
                                <span>${anime.title}</span> 
                            </div>
                        </a>`;
    })

    document.getElementById('search_results').innerHTML = cardsMarkup;

    document.querySelectorAll('.card').forEach(animeCard => {
        animeCard.addEventListener('click', () => {
            event.preventDefault();
            const cardIndex = parseInt(animeCard.getAttribute('data-card-index'));
            displayIndividualAnimeDetails(animes[cardIndex]);
        });
    });
}

function onAnimeSearch(searchValue){
    var requestURL = "https://api.jikan.moe/v4/anime?q=" + searchValue
fetch(requestURL)
.then(function(response) {
    console.log(response);
    return response.json();
}).then(function({data}) {
    console.log(data);
    displayAnimeCards(data);
}).catch(function(error) {
    console.log(error);
})
}

buttonEl.addEventListener("click", searchSubmission)