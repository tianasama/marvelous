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
  
  
  
  
//MARVEL API SCRIPT
  fetch('/marvel').then(resp => resp.json()).then((data) => {
    
    var comic = [];
    
    for (var i=0; i < 5; i++) {
      var img = document.createElement('img');
      img.className = 'comicPanel';
      img.setAttribute('src', data.images.path);
      document.getElementById('').appendChild(img);
    } 
    
    console.log(data);
    
  });
});
  
  


  
