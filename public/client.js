// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

// init
	var controller = new ScrollMagic.Controller();

// define movement of panels
	var wipeAnimation = new TimelineMax()
	.fromTo("container.section.characters", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
	.fromTo("container.section.character1",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
	.fromTo("container.section.character2", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top
  .fromTo("container.section.character3", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})

// create scene to pin and link animation
	new ScrollMagic.Scene({
	triggerElement: "#pinContainer",
	triggerHook: "onLeave",
	duration: "300%"
								})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);