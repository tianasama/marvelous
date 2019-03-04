// client-side js
// run by the browser each time your view template is loaded

/* global ScrollMagic */
document.addEventListener("DOMContentLoaded", ()=>  {
  
  console.log("Scrollmagic works!", ScrollMagic);
  
  //init scrollmagic
  var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
		triggerHook: 'onLeave'
					}
				});

	// get all slides
	var slides = document.querySelectorAll("section.panel");

	// create scene for every slide
	for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
						})
					.setPin(slides[i])
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
							}  
  
});