var twitKey = new Twitter({
    consumer_key:        5iFNDxwP22CH6qErtvM1pktBE,
    consumer_secret:     NNiA4zB7xYi5jU4hfHfC8HJ7SacXdJGaBm0nd6sWKaJNE19Ieu,
    access_token_key:    958737189839319041-bpVZFwBQL7pE4AutwcrA2UeRgPUejhR
    ,
    access_token_secret: t9csFErS13NCdZ6s2esHfnyVof2kJi5aPQHEPxxTzayMs
});

var spotKey = new Spotify({
    id: < 52f4215b9f304705ab919d70dbba9249>,
    secret: < 10e54d8b89a8440180f63ce4671e972d>
});

var request = require('request');
request('http: //www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});