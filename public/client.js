// client-side js
// run by the browser each time your view template is loaded

/* global ScrollMagic, Linear */
document.addEventListener("DOMContentLoaded", ()=>  {
 
  
  
//SCROLLMAGIC SCRIPT  
  console.log("Scrollmagic works!", ScrollMagic);
  
  //init scrollmagic
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerhook: 'onEnter',
        duration: '200%'
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
  
  
  //Parallax effect - One
  new ScrollMagic.Scene ({triggerElement: "#two"})
      .setTween ("#two > div, {y: 80%, ease: Linear.easeNone}")
      .addIndicators()
      .addTo(controller);
  
//MARVEL API SCRIPT
  fetch('search-comic').then(resp => resp.json()).then((data) => {
    console.log(data);
    
  });
});