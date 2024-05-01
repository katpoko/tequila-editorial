console.log( '😀👍🍎' );
// GSAP library
// https://unpkg.co/gsap@3/dist/gsap.min.js

// ScrollTrigger plugin
// https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js

// Install Plugin
gsap.registerPlugin(ScrollTrigger);

// Get each Panel
let sections = gsap.utils.toArray(".panel");
// Set Panels to horizontally scroll
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500"
  }
});

// Panel Zero
gsap.to(".zero", {
  scrollTrigger: "zero"
});

// Panel One
gsap.to(".one", {
  scrollTrigger: "one"
});

// Panel Two
gsap.to(".two", {
  scrollTrigger: "two"
});

// Panel Three
gsap.to(".three", {
  scrollTrigger: "three"
});

// Panel Four
gsap.to(".four", {
  scrollTrigger: "four",
  // color: "red"
});

// Panel Five
gsap.to(".five h1", {
  scrollTrigger: "five"
});

// Panel Six
gsap.to(".six", {
  scrollTrigger: "six"
});
