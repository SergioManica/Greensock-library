// gsap.from('.header', {duration: 1, y:'-100%', ease:'bounce'})
// gsap.from('.link', {duration: 1, delay:1, opacity:0,stagger:.5 })
// gsap.from('.right', {duration: 1, delay: 1, x:'-100vw', ease:'power2.in'})
// gsap.from('.left',{duration:1,delay:1,x:'-100%', ease:'power2.in'})
// gsap.to('.footer', { duration:1 , delay:2.5, y:0, ease:'elastic'})
// gsap.fromTo('.button', {opacity:0, scale:0, rotation:720}, { opacity:1, duration:1, delay:3.5,scale:1,rotation:0})

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".link", { opacity: 0, stagger: 0.5 })
  .from(".right", { x: "-100vw", ease: "power2.in" }, 1.5)
  .from(".left", { x: "-100%", ease: "power2.in" }, "<.2")
  .to(".footer", { y: 0, ease: "elastic" })
  .fromTo(".button",{ opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 });

const button = document.querySelector(".button");

button.addEventListener("click", () => {
    timeline.timeScale(3)
    timeline.reverse()
});
