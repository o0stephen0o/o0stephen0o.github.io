let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/moon.jpg') {
      myImage.setAttribute('src', 'images/watch.jpg');
    } else {
      myImage.setAttribute('src', 'images/moon.jpg');
    }
}