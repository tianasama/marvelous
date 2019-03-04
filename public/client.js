// client-side js
// run by the browser each time your view template is loaded

/* global ScrollMagic */
document.addEventListener("DOMContentLoaded", ()=>  {
  
  console.log("Scrollmagic works!", ScrollMagic);
  
  //init scrollmagic
  var controller = new ScrollMagic.Controller();
  
  //scenes
  new ScrollMagic.Scene({
        triggerElement: "#one",
        triggerHook: "onLeave",
    })
    .setPin("#one")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
 
  new ScrollMagic.Scene({
          triggerElement: "#two",
          triggerHook: "onLeave",
      })
      .setPin("#two")
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  
  new ScrollMagic.Scene({
          triggerElement: "#three",
          triggerHook: "onLeave",
      })
      .setPin("#three")
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);  
  
});