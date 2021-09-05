gsap.from(".fade-in", {duration: 1, opacity: 0, y: 150, stagger: 0.25});


gsap.registerPlugin(ScrollTrigger);
gsap.from(".on-scroll", {
    scrollTrigger: {
        trigger:"about-section",
        markers: true,
        toggleActions: "restart pause reverse pause"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0, 
    y: 150, 
    stagger: 0.25,
    duration: 1
  });

 