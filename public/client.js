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
//   fetch('search-comic').then(resp => resp.json()).then((data) => {
//     console.log(data);
    
//   });
// });
  
  

$(function(){
var marvelAPI = 'https://gateway.marvel.com/v1/public/comics';
  fetch getJSON( marvelAPI, {
    apikey: '653f582c9509fb4c0acb6bb9b5bf30dc'
  })
    .done(function( response ) {
      var results = response.data.results;
      var resultsLen = results.length;
      var output = '<ul>'; 
      
      for(var i=0; i<resultsLen; i++){
        if(results[i].images.length > 0) {
          var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
          output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
        }
      }  
      output += '</ul>'
      $('#results').append(output);
  });
   
  });
  
});