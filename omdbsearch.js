
// Incorporating an npm package for doing request omdb searches.

var request = require("request");
function omdbFunc(movie) {
  // Then run a request to the OMDB API with the movie specified
  request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=40e9cece", function (error, response, body) {
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

//export the module
module.exports.searchOmdb = omdbFunc;
