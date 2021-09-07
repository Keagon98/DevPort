gsap.from(".fade-in", {
  duration: 1,
  opacity: 0,
  y: 150,
  stagger: 0.25,
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".on-scroll", {
  scrollTrigger: {
    trigger: "on-scroll",
    toggleActions: "restart pause reverse pause",
  }, // start the animation when ".box" enters the viewport (once)
  opacity: 0,
  y: 150,
  stagger: 0.25,
  duration: 1,
});

let masks = document.querySelectorAll('.mask');

masks.forEach( mask => {
    let image = mask.querySelectorAll('.img-holder');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: mask,
            toggleActions: "restart none none reset"
        }
    });

    tl.set(mask, {autoAlpha: 1});

    tl.from(mask, 1.5, {
        xPercent: -100,
        ease: Power2.out
    });
    tl.from(image, 1.5, {
        xPercent: 100,
        scale: 2,
        delay: -1.5,
        ease: Power2.out
    });
});
