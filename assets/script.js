var searchForm = document.querySelector ("#search-form");

function searchSubmission (event){
    event.preventDefault();

    var inputSearchEL = document.querySelector("#search-input").values();

    if(!inputSearchEL){
        console.error('Please enter Anime title!');
        return;
    }
}


searchForm.addEventListener('submit', searchSubmission);