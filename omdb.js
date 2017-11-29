// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// npm install request on command line means you installed request in node_modules which you can see on left nav, also you can access it in this require method
// command line utility
// package manager
var request = require("request");
var movieName = process.argv[3];

if (process.argv[2] === "movie-this") {
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
}