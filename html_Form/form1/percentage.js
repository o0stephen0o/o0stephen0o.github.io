var percentage = document.querySelector('#percentage');
var count = document.querySelector('.percentagerate');

count.textContent = percentage.value;

percentage.oninput = function() {
  count.textContent = percentage.value;
}