$( document ).ready(function() {
  animateSlideOutOfBox();
});

function animateSlideOutOfBox() {
  document.getElementById("date").textContent = getCurrentDate();
  document.getElementById("time").textContent = getCurrentTime();
  $('#container').animate({ 'margin-top': '-97px' }, 6000);
}

function animateSlideIntoBox() {
  $('#container').animate({ 'margin-top': '730px' }, 3000);
}

function getCurrentDate() {
  return moment().format('MMMM Do YYYY');
}

function getCurrentTime() {
  return moment().format('h:mm A');
}
