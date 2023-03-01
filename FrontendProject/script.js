// Get the body element
const body = document.querySelector('body');

// Create the new div element and set its id and contents
const newDiv = document.createElement('div');
newDiv.id = 'firstload';
newDiv.innerHTML = `
  <div id="background-container">
    <div id="background"></div>
    <img src="./Img/Nav/8PACE(w).png" alt="SPACE Logo" id="logo">
  </div>
`;

// Add the new div as the first child of the body
body.insertBefore(newDiv, body.firstChild);

// Remove the new div after 3 seconds
setTimeout(function() {
  var secondDiv = document.getElementById('firstpage');
  secondDiv.style.display = 'block';
  body.removeChild(newDiv);
 }, 3000);