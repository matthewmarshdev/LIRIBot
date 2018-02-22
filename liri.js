require("dotenv").config();
var stuffINeed = require("./keys.js");
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");

var arg1 = process.argv[2];
var arg2 = process.argv[3];
 


var theTwitter = function(){

        var client = new Twitter({
            consumer_key: stuffINeed.twitKey.consumer_key,
            consumer_secret: stuffINeed.twitKey.consumer_secret,
            access_token_key: stuffINeed.twitKey.access_token_key,
            access_token_secret: stuffINeed.twitKey.access_token_secret
          });

        var params = {screen_name: 'MMLiri18'};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
          for(var i=0;i<10;i++){
            console.log(tweets[i].text);
          } 
          
        });
}


var theSpotify = function(){

          var spotify = new Spotify({
            id: stuffINeed.spotKey.id,
            secret: stuffINeed.spotKey.secret
          });
  
          /**fs.readFile("random.txt", "utf8", function(error, data) {
          
            const trackSearch = dataArr;
              if (error) {
                return console.log(error);
              }
              console.log(data);
              var dataArr = data.split(",");
              console.log(dataArr);
            
          });**/
  
          


          spotify.search({type: 'track', query: arg2 }, function(err, data) {
              if (err) {
                return console.log('Error occurred: ' + err);
              } else {
                console.log(data.tracks.items[0].album.artists[0].name);  
              }
          });
}

var omdbReq = function(){
      
  var request = require("request");
  request("http://www.omdbapi.com/?t=" + arg2 + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body)
      console.log("");
      console.log("");
      console.log("-------------------------------------------------------");
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Year: " + JSON.parse(body).Year);
      console.log("Country: " + JSON.parse(body).Country);
      console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
      console.log("The movie's Rotten Tomato rating is: " + JSON.parse(body).tomatoRating);
      console.log("-------------------------------------------------------");
      console.log("");
      console.log("");
    }
  }); 
}

if (arg1 === 'my_tweets'){
  theTwitter();
} else if (arg1 === 'spotify_this') {
  theSpotify();
} else if (arg1 === 'find_movie'){
  omdbReq();
}
