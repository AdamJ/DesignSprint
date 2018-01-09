// Utilizes Native Browser Smooth Scrolling
// Utilizes https://github.com/iamdustan/smoothscroll
// This is an experimental feature: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

// scroll into view
document.querySelector('.section-1').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#section1').scrollIntoView({ behavior: 'smooth' });
});
// scroll into view
document.querySelector('.section-2').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#section2').scrollIntoView({ behavior: 'smooth' });
});
// scroll into view
document.querySelector('.section-3').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#section3').scrollIntoView({ behavior: 'smooth' });
});
// scroll into view
document.querySelector('.section-4').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#section4').scrollIntoView({ behavior: 'smooth' });
});
// scroll into view
document.querySelector('.section-5').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#section5').scrollIntoView({ behavior: 'smooth' });
});
