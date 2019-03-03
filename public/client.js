// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

// Declaring Scrollmagic controller
var controller = new ScrollMagic.Controller();

//Defining scrollmagic scene
var scene = new ScrollMagic.Scene({
  offset: 100, // start scene after scrolling for 100px
  duration: 400 // pin the element for 400px of scrolling
})
