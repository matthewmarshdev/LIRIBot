require("dotenv").config();
var stuffINeed = require("./keys.js");
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');



console.log(stuffINeed.spotify.secret);

/**var client = new Twitter({
    consumer_key: stuffINeed.twitter.consumer_key,
    consumer_secret: stuffINeed.twitter.consumer_secret,
    access_token_key: stuffINeed.twitter.access_token_key,
    access_token_secret: stuffINeed.twitter.access_token_secret
  });

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

request('http://www.google.com', function (error, response, body) {
    //run JSON.parse(body);
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
}); **/
var arg1 = process.argv[2];

switch(arg1){
    case 'mytweets':
    var client = new Twitter({
        consumer_key: stuffINeed.twitter.consumer_key,
        consumer_secret: stuffINeed.twitter.consumer_secret,
        access_token_key: stuffINeed.twitter.access_token_key,
        access_token_secret: stuffINeed.twitter.access_token_secret
      });
    
    var params = {screen_name: 'nodejs'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      }
    });
    break;
    case 'spotifyThis':
    console.log('spotify logic');
    break;
}

