var spotify = require("./spotifysearch.js");
var twitter = require('./twittersearch.js');
var omdb = require('./omdbsearch.js');

var operation = process.argv[2];
var userInput = process.argv;
var searchItem = "";

// Capture all the words in the userInput ignore first 3
for (var i = 3; i < userInput.length; i++) {

  // Build a string with the movie or song to be searched.
  if (!(i === 3)) {
    searchItem = searchItem + " " + userInput[i];
  } else {
    searchItem = searchItem + "" + userInput[i];
  };
};
console.log(searchItem);



switch (operation) {
  case "my-tweets":
    twitter.getTweets();
    break;
  case "spotify-this-song":
    spotify.searchSpotify(searchItem);
    break;
  case "movie-this":
    omdb.searchOmdb(searchItem);
    break;
  default:
    console.log("you gotta specify my-tweets, spotify-this-song or movie-this plus your choice of song or movie please.");
};


// Example Input:
// node liri.js my-tweets

// RESULTING OUTPUT:
// 
// My Tweets
// -------------------------------------------------------------------

// Thu Nov 16 04:14:18 +0000 2017
// I've seen it all now, pope and Lamborghini in one sentence! https://t.co/nYJxLR2cdb
// https://twitter.com/loubootcamp/status/931012526925602817


// Thu Nov 16 04:13:22 +0000 2017
// Oh no the country will be upset they love the Rigby https://t.co/6lqMwhpQcR
// https://twitter.com/loubootcamp/status/931012293441261569


// Example Input:
// node liri.js spotify-this-song bicycle race


// RESULTING OUTPUT:
// ********************Song Information Here:****************************

// -----------------------------------------------------
//  Artist :  Queen
//  Song Name: Bicycle Race - Remastered 2011
//  Url https://open.spotify.com/track/3lUx27TOwV2nAiKwnYYXxe
//  Album: Jazz (Deluxe Remastered Version)

// ----------------------------------------------------- 



// Example Input:
// node liri.js movie-this the godfather

// RESULTING OUTPUT:
// 
// MOVIE INFO

// ------------------------------------------------------------

//  Title: The Godfather
//  Year: 1972
//  Rating is: 9.2
//  Country: USA
//  Language: English, Italian, Latin
//  Plot: The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.

//  Actors: Marlon Brando, Al Pacino, James Caan, Richard S. Castellano
//  Tomatoes Rating: N/A
