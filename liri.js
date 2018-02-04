require("dotenv").config();
var stuffINeed = require("./keys.js");
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var arg1 = process.argv[2];
var arg2 = process.argv[3];


var theTwitter = function(){

var client = new Twitter({
    consumer_key: stuffINeed.twitter.consumer_key,
    consumer_secret: stuffINeed.twitter.consumer_secret,
    access_token_key: stuffINeed.twitter.access_token_key,
    access_token_secret: stuffINeed.twitter.access_token_secret
  });

var params = {screen_name: 'MMLiri18'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error && arg1 === 'my-tweets') {
    console.log(tweets);
  }
});
}


var theSpotify = function(){

          var trackSearch = arg2

          var spotify = new Spotify({
            id: stuffINeed.spotify.access_token_key,
            secret: stuffINeed.spotify.access_token_secret
          });
          
          spotify.search({ type: 'track', query: trackSearch }, function(err, data) {
              if (err) {
                return console.log('Error occurred: ' + err);
              }
          
          console.log(data.name); 
          });
        }

var omdbReq = function(){
      
      if(arg1 === 'movie-this'){
          var movieSearch = 'http://www.omdbapi.com/?apikey=trilogy&t='+ arg2;
          request(movieSearch, function (error, response, body) {
            //run JSON.parse(body);
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
        });

      }
}


/**switch(arg1){
    case 'mytweets': 
    theTwitter();
    break;

    case 'spotifyThis':
    theSpotify();
    break;

    case 'findMovie':
    omdbReq();
    break;
}**/
