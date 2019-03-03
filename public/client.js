// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

// init controller
var controller = new ScrollMagic.Controller();

//Defining scrollmagic scene
var scene = new ScrollMagic.Scene({
  duration: 100, // pin the element for 400px of scrolling
  offset: 50, // start scene after scrolling for 100px
})
