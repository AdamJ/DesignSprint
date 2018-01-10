// Utilizes Native Browser Smooth Scrolling
// Utilizes https://github.com/iamdustan/smoothscroll
// This is an experimental feature: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

// scroll into view
document.querySelector('.mission-runtime').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#MissionRuntime').scrollIntoView({ behavior: 'smooth' });
});
// scroll into view
document.querySelector('.target-environent').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#TargetEnvironment').scrollIntoView({ behavior: 'smooth' });
});
// scroll into view
document.querySelector('.release-strategy').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#ReleaseStrategy').scrollIntoView({ behavior: 'smooth' });
});
// scroll into view
document.querySelector('.git-provider').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#GitProvider').scrollIntoView({ behavior: 'smooth' });
});
// scroll into view
document.querySelector('.project-summary').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#ProjectSummary').scrollIntoView({ behavior: 'smooth' });
});
