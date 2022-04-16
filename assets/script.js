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