console.clear();
var div = document.getElementsByTagName('div');
// console.log(divs);
var divA = document.getElementById('A');
var divS = document.getElementById('S');
var divD = document.getElementById('D');
var divF = document.getElementById('F');
var divG = document.getElementById('G');
var divH = document.getElementById('H');
var divJ = document.getElementById('J');
var divK = document.getElementById('K');
var divL = document.getElementById('L');

var openhat = new Audio("./Audios/openhat.wav");
var boom = new Audio("./Audios/boom.wav");
var clap = new Audio("./Audios/clap.wav");
var hihat = new Audio("./Audios/hihat.wav");
var kick = new Audio("./Audios/kick.wav");
var ride = new Audio("./Audios/ride.wav");
var snare = new Audio("./Audios/snare.wav");
var tink = new Audio("./Audios/tink.wav");
var tom = new Audio("./Audios/boom.wav");

window.addEventListener("keypress", function (e) {
  var keyCode = e.key;
  keyCode = keyCode.toUpperCase();
  // console.log(keyCode);
  switch (keyCode) {
    case "A":
      divA.classList.add('selected')
      setTimeout(()=>{divA.classList.remove('selected')},500);
      openhat.play();
      break;
    case "S":
      divS.classList.add('selected');
      setTimeout(()=>{divS.classList.remove('selected')},500);
      tom.play();
      break;
    case "D":
      divD.classList.add('selected');
      setTimeout(()=>{divD.classList.remove('selected')},500);
      hihat.play();
      break;
    case "F":
      divF.classList.add('selected');
      setTimeout(()=>{divF.classList.remove('selected')},500);
      boom.play();
      break;
    case "G":
      divG.classList.add('selected');
      setTimeout(()=>{divG.classList.remove('selected')},500);
      kick.play();
      break;
    case "H":
      divH.classList.add('selected');
      setTimeout(()=>{divH.classList.remove('selected')},500);
      ride.play();
      break;
    case "J":
      divJ.classList.add('selected');
      setTimeout(()=>{divJ.classList.remove('selected')},500);
      snare.play();
      break;
    case "K":
      divK.classList.add('selected');
      setTimeout(()=>{divK.classList.remove('selected')},500);
      tink.play();
      break;
    case "L":
      divL.classList.add('selected');
      setTimeout(()=>{divL.classList.remove('selected')},500);
      clap.play();
  }
});
