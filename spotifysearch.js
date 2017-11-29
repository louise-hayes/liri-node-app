var nodeSpotifyApi = require("node-spotify-api")
var spotify = new nodeSpotifyApi({
    id: 'e645a33e3406449aa896313dba3cbb28',
    secret: 'f4682e34f2984e8c907a29862c3799e6'
});

function doSearch(title) {
    var options = {
        type: 'track',
        query: title,
        limit: 5
    }
    query = "track:" + title;

    if (!title) {
        // console.log("empty !");
        options.query = "artist:Ace%20Of%20Base";
        options.query += "%20track:The%20Sign";
        options.query += "%20album:The%20Sign";
        options.limit = 1;
    };

    spotify.search(options, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);

        }

        // console.log(data);
        var trackArray = data.tracks.items;
        console.log("");
        console.log("");
        console.log("");
        console.log("********************Song Information Here:****************************")
        console.log("");
        console.log("-----------------------------------------------------");

        for (i = 0; i < trackArray.length; i++) {
            for (x = 0; x < trackArray[i].artists.length; x++) {
                console.log(" Artist : " + " " + trackArray[i].artists[x].name);
            };
            console.log(" Song Name: " + trackArray[i].name);
            // console.log(" Link: " + trackArray[i].href);
            console.log(" Url " + trackArray[i].external_urls.spotify);
            console.log(" Album: " + trackArray[i].album.name);

            console.log("");
            console.log("-----------------------------------------------------");
            // objects.items.artist
        }

    });

}; //end dosearch title function




module.exports.searchSpotify = doSearch;