# liri-node-app

Liri node command line application using Spotify, Twitter and Movie API requests
LIRI is a Language Interpretation and Recognition Interface somewhat like iPhones SIRI. LIRI is a command line node app that takes in parameters and gives you back data. This App displays latest tweets, song and movie information using the spotify, omdb and twitter node npm modules.

Built with Javascript, node.js and npm packages
Sends requests to the Twitter, Spotify and OMDB APIs. Uses Twitter, Spotify and Request npm packages.

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
