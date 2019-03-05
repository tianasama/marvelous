// client-side js
// run by the browser each time your view template is loaded

/* global ScrollMagic, Linear */
document.addEventListener("DOMContentLoaded", ()=>  {
  
  console.log("Scrollmagic works!", ScrollMagic);
  
  //init scrollmagic
  var controller = new ScrollMagic.Controller({
    globalSceneOptionis: {
        triggerhook: 'OnLeave'
    }
  });
  
  //Parallax effect - Title
  new ScrollMagic.Scene({
        triggerElement: "#title",
        triggerHook: "onEnter",
      })
      .duration('200%')
      .setTween("#title", {
          backgroundPosition: "50% 100%",
          ease: Linear.easeNone
      })

      //.addIndicators() // for debugging purposes
      .addTo(controller);
  
  
    //Parallax effect - Title
  new ScrollMagic.Scene({
        triggerElement: "#one",
        triggerHook: "onEnter",
      })
      .duration('200%')
      .setTween("#one", {
          backgroundPosition: "50% 100%",
          ease: Linear.easeNone
      })

      //.addIndicators() // for debugging purposes
      .addTo(controller);
  

  //get main slides
//   var slides = document.querySelectorAll("section.main");
    
//  //create scene for every main slide
//   for (let i=0; i <slides.length; i++) {
//    new ScrollMagic.Scene ({
//      triggerElement: slides [i]
//    })
//     .setPin (slides[i])
//     .addIndicators()
//     .addTo(controller);
//   } 
});