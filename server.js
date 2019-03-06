// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

//ASK IF YOU NEED TO AUTHORIZE APP like in spotify api

//-------------------------------------------------------------//
//------------------------- MARVEL API ------------------------//
//-------------------------------------------------------------//

//Initialize Marvel API Wrapper
var api = require('marvel-api');


// The object we'll use to interact with the API
var marvel = api.createClient({
  publicKey: process.env.PUBLIC_KEY
, privateKey: process.env.PRIVATE_KEY
});


//-------------------------------------------------------------//
//------------------------- API CALLS -------------------------//
//-------------------------------------------------------------//

//Find comics filtered by Venom (Eddie Brock) character ID - 1010787
app.get('/deadpool', function (request, response) {
  
 marvel.characters.comics('1009268')
  .then((data) => {
   let trimmed = data.data.slice(0, 5);
   response.send(trimmed)

 })
  .fail(console.error)
  .done();
  
  
})

//Find comics filtered by Deadpool character ID - 1009268
app.get('/deadpool', function (request, response) {
  
 marvel.characters.comics('1009268')
  .then((data) => {
   let trimmed = data.data.slice(0, 5);
   response.send(trimmed)

 })
  .fail(console.error)
  .done();
  
  
})




//https://codepen.io/Boo-urns/pen/IdCKr


//Find comics filtered by Magneto character ID - 1009417
