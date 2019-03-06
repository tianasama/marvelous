// client-side js
// run by the browser each time your view template is loaded

/* global ScrollMagic, Linear */
document.addEventListener("DOMContentLoaded", ()=>  {
 
  
//-------------------------------------------------------------//
//------------------------- SCROLLMAGIC -----------------------//
//-------------------------------------------------------------//
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
      .duration(200)
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
      .duration(200)
      .setTween("#one", {
          backgroundPosition: "100% 100%",
          ease: Linear.easeNone
      })

      //.addIndicators() // for debugging purposes
      .addTo(controller);

  
  //Parallax effect - Two
  new ScrollMagic.Scene({
        triggerElement: "#two",
        triggerHook: "onEnter",
      })
      .duration(200)
      .setTween("#two", {
          backgroundPosition: "100% 100%",
          ease: Linear.easeNone
      })

      //.addIndicators() // for debugging purposes
      .addTo(controller);  

  
  //Parallax effect - Three
  new ScrollMagic.Scene({
        triggerElement: "#three",
        triggerHook: "onEnter",
      })
      .duration(200)
      .setTween("#three", {
          backgroundPosition: "100% 100%",
          ease: Linear.easeNone
      })

      //.addIndicators() // for debugging purposes
      .addTo(controller);  
  

//-------------------------------------------------------------//
//------------------------- MARVEL API ------------------------//
//-------------------------------------------------------------//  

  
  
//MARVEL API SCRIPT
  fetch('/venom').then(resp => resp.json()).then((data) => {
    
    console.log('Venom is here!');
    
    var comic = [];
    for (var i=0; i<5; i++){
      comic.push(data[i]);
    }
    console.log(comic);
    
    for (var i=0; i < comic.length; i++) {
      var img = document.createElement('img');
      img.className = 'comicPanel';
      img.setAttribute('src', comic[i].thumbnail.path + ".jpg");
      document.getElementById('venomresults').appendChild(img);
    } 
    
    console.log(data);
    
  });
});
  
  


  
