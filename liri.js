var keys = require("./keys.js");
var Twitter = require('twitter');
var nodeSpotifyApi = require("node-spotify-api");
var request = require("request");
var spotify = new nodeSpotifyApi({
  id: 'e645a33e3406449aa896313dba3cbb28',
  secret: 'f4682e34f2984e8c907a29862c3799e6'
});
// var spotify = require()
// console.log(keys);
var client = new Twitter(keys);
var params = {
  // q: 'loubootcamp',
  screen_name: 'loubootcamp',
  count: 20,
  result_type: 'recent',
  lang: 'en'
} // this is the param variable which will have key and value 
//   the key is the keyword which we are interested in searching and count
// is the count of it
var operation = process.argv[2];

switch (operation) {
  case "my-tweets":
    twitterFunc();
    break;
  case "spotify-this-song":
    spotifyFunc();

    break;

  case "movie-this":
    omdbFunc();

  default:
    console.log("you gotta pick a song movie or my-tweets man");
};


function twitterFunc() {
  client.get('statuses/user_timeline', params, searchedData);

  function searchedData(error, tweets, response) {
    // console.log(tweets);
    if (error) throw error

    // Loop through the returned tweets
    for (let i = 0; i < tweets.length; i++) {

      // Get the tweet Id from the returned data
      let id = {
        id: tweets[i].id_str
      }
      let created_at = {
        created_at: tweets[i].created_at

      }
      // let createdDate = moment(created_at).format("YYYYMMDDHHmm");
      let username = tweets[i].user.screen_name;
      let tweetId = tweets[i].id_str;
      let text = tweets[i].text;
      console.log(created_at);
      console.log(text);
      console.log(`https://twitter.com/${username}/status/${tweetId}`)

    }; // end loop of returned tweets
    // console.log(response);  // Raw response object. 
  }; // end function searchedData()
}; // end twitterFunc()

function spotifyFunc() {
spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);

  }
 
console.log(data); 
var trackArray=data.tracks.items;
console.log("********************Song Information Here:****************************")
console.log("");
console.log("-----------------------------------------------------");

for (i=0;i<trackArray.length;i++) { 
  for (x=0;x<trackArray[i].artists.length;x++) {
console.log(" Artist : " + " " + x + trackArray[i].artists[x].name);
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
}; //end spotify function

function omdbFunc() {
// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=" + process.argv[3] + "&y=&plot=short&tomatoes=true&apikey=40e9cece", function (error, response, body) {
  // anonymous callback function

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("");
      console.log("MOVIE INFO");
      console.log("");
      console.log("------------------------------------------------------------");
      console.log("");
      console.log(" Title: " + JSON.parse(body).Title);
      console.log(" Year: " + JSON.parse(body).Year);
      console.log(" Rating is: " + JSON.parse(body).imdbRating);
      console.log(" Country: " + JSON.parse(body).Country);
      console.log(" Language: " + JSON.parse(body).Language);
      console.log(" Plot: " + JSON.parse(body).Plot);
      console.log("");
      console.log(" Actors: " + JSON.parse(body).Actors);
      console.log(" Tomatoes Rating: " + JSON.parse(body).tomatoRating);
  }
});

} //end omdbFunc