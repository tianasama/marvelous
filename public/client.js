// client-side js
// run by the browser each time your view template is loaded

/* global ScrollMagic, Chart, Linear */
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
  
    //Parallax effect - Four
  new ScrollMagic.Scene({
        triggerElement: "#four",
        triggerHook: "onEnter",
      })
      .duration(200)
      .setTween("#four", {
          backgroundPosition: "100% 100%",
          ease: Linear.easeNone
      })

      //.addIndicators() // for debugging purposes
      .addTo(controller);  
  

//-------------------------------------------------------------//
//------------------------- MARVEL API ------------------------//
//-------------------------------------------------------------//  
  
//VENOM
  fetch('/venom').then(resp => resp.json()).then((data) => {
    
    console.log('Venom is here!');
    
    var comic = [];
    for (var i=0; i<12; i++){
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
  
//DEADPOOL
  fetch('/deadpool').then(resp => resp.json()).then((data) => {
    
    console.log('Deadpool is here!');
    
    var comic = [];
    for (var i=0; i<12; i++){
      comic.push(data[i]);
    }
    console.log(comic);
    
    for (var i=0; i < comic.length; i++) {
      var img = document.createElement('img');
      img.className = 'comicPanel';
      img.setAttribute('src', comic[i].thumbnail.path + ".jpg");
      document.getElementById('deadpoolresults').appendChild(img);
    } 
    
    console.log(data);
    
  });
  
//MAGNETO
  fetch('/magneto').then(resp => resp.json()).then((data) => {
    
    console.log('Magneto is here!');
    
    var comic = [];
    for (var i=0; i<12; i++){
      comic.push(data[i]);
    }
    console.log(comic);
    
    for (var i=0; i < comic.length; i++) {
      var img = document.createElement('img');
      img.className = 'comicPanel';
      img.setAttribute('src', comic[i].thumbnail.path + ".jpg");
      document.getElementById('magnetoresults').appendChild(img);
    } 
    
    console.log(data);
    
  });
  
  
//-------------------------------------------------------------//
//------------------------- CHART.JS --------------------------//
//-------------------------------------------------------------//    
  
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Venom", "Deadpool", "Magneto"],
        datasets: [{
            label: 'How many movies have you appeared in (as of 2019)?',
            data: [2, 3, 7],
            backgroundColor: [
                'rgba(105, 130, 72, 0.5)',
                'rgba(221, 63, 69, 0.5)',
                'rgba(175, 133, 243, 0.5)',
            ],
            borderColor: [
                'rgba(34, 35, 36, 1)',
                'rgba(221, 63, 69, 1)',
                'rgba(27, 16, 29, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            labels: {
                fontFamily: 'VT323',
                fontColor:'white',
            }
        }
    }
});
  
  
  
});
  
  


  
