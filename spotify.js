var nodeSpotifyApi = require("node-spotify-api")
 
var spotify = new nodeSpotifyApi({
  id: 'e645a33e3406449aa896313dba3cbb28',
  secret: 'f4682e34f2984e8c907a29862c3799e6'
});
 
if (process.argv[2] === 'spotify-this-song') {
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
} //end if