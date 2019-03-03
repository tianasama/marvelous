// client-side js
// run by the browser each time your view template is loaded

/* global $,console,document,Handlebars */

document.addEventListener("DOMContentLoaded", function(){
  console.log('hello world :o');

  // MARVEL API
  //default not avail image
  var IMAGE_NOT_AVAIL = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

  //API Key
  var KEY = process.env.SECRET;

  //credit: http://stackoverflow.com/a/1527820/52160
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Get data for Deadpool
  function getVenomData() {
    var url = "https://gateway.marvel.com:443/v1/public/characters/1010787/comics?format=comic&formatType=comic&noVariants=false&limit=5&apikey="+KEY;
    console.log('venom data loaded');
    return fetch(url);
  }
});