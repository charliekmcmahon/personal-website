var i = 0;
var txt = 'Welcome to charliekmcmahon.com.au';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()
