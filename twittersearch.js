var keys = require("./keys.js");
var Twitter = require('twitter');
var client = new Twitter(keys);
var params = {
  screen_name: 'loubootcamp',
  count: 20,
  result_type: 'recent',
  lang: 'en'
} // this is the param variable which will have key and value 
//   the key is the keyword which we are interested in searching and count
// is the count of it

function twitterSearch() {
    client.get('statuses/user_timeline', params, searchedData);
  
    function searchedData(error, tweets, response) {
      // console.log(tweets);
      if (error) throw error
  
      // Loop through the returned tweets
      console.log("");
      console.log("");
      console.log("");
      console.log("My Tweets ");
      console.log("-------------------------------------------------------------------");
      console.log("");
      
      
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
      
        console.log(created_at.created_at);
        console.log(text);
        console.log(`https://twitter.com/${username}/status/${tweetId}`)
        console.log("");
        console.log("");
      }; // end loop of returned tweets
      // console.log(response);  // Raw response object. 
    }; // end function searchedData()
  }; // end twitterFunc()
  
module.exports.getTweets = twitterSearch;
