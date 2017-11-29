var keys = require("./keys.js");
var Twitter = require('twitter');
// console.log(keys);
var client = new Twitter(keys);
var params = {
  // q: 'loubootcamp',
  screen_name: 'nodejs',
  count: 3,
  result_type: 'recent',
  lang: 'en'
} // this is the param variable which will have key and value 
//   the key is the keyword which we are interested in searching and count
// is the count of it
//   if (process.argv[2] === 'my-tweets') {
client.get('statuses/user_timeline', params, searchedData);

function searchedData(error, tweets, response) {
  if (error) throw error;
  // Loop through the returned tweets
  for (let i = 0; i < tweets.statuses.length; i++) {
    // Get the tweet Id from the returned data
    let id = {
      id: tweets.statuses[i].id_str
    }
    let created_at = {
      created_at: tweets.statuses[i].created_at
    }

    let username = response.user.screen_name;
    let tweetId = response.id_str;
    conseole.log(created_at);
    console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)

  } // end loop

  // console.log(response);  // Raw response object. 
};
// end function