console.log('OK');

let tl = gsap.timeline();

tl.from('.wrx', {  x: -600, duration: 2 })
  .from('.google_cloud', {opacity: 0, duration: 2 });