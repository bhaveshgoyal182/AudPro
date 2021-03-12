console.clear();
var button = document.getElementsByTagName('button');
var butS = document.getElementById('S');
var butA = document.getElementById('A');
var butD = document.getElementById('D');
var butF = document.getElementById('F');
var butG = document.getElementById('G');
var butH = document.getElementById('H');
var butJ = document.getElementById('J');
var butK = document.getElementById('K');
var butL = document.getElementById('L');
var openhat = new Audio("./Audios/openhat.wav");
var boom = new Audio("./Audios/boom.wav");
var clap = new Audio("./Audios/clap.wav");
var hihat = new Audio("./Audios/hihat.wav");
var kick = new Audio("./Audios/kick.wav");
var ride = new Audio("./Audios/ride.wav");
var snare = new Audio("./Audios/snare.wav");
var tink = new Audio("./Audios/tink.wav");
var tom = new Audio("./Audios/boom.wav");

//for on_click functioning
for(let i = 0; i < 9; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",function(e){
    var key = this.id;
    console.log(key + " was clicked.")
    playSound(key);
  });
}

//for on_press functioning
document.addEventListener("keypress", function (e) {
  var keyCode = e.key;
  keyCode = keyCode.toUpperCase();
  console.log(keyCode + " was pressed.")
  playSound(keyCode);
  });


  function playSound(keyCode){
      switch (keyCode) {
        case "A":
          butA.classList.add('selected')
          setTimeout(()=>{butA.classList.remove('selected')},500);
          openhat.play();
          break;
        case "S":
          butS.classList.add('selected');
          setTimeout(()=>{butS.classList.remove('selected')},500);
          tom.play();
          break;
        case "D":
          butD.classList.add('selected');
          setTimeout(()=>{butD.classList.remove('selected')},500);
          hihat.play();
          break;
        case "F":
         butF.classList.add('selected');
          setTimeout(()=>{butF.classList.remove('selected')},500);
          boom.play();
          break;
        case "G":
          butG.classList.add('selected');
          setTimeout(()=>{butG.classList.remove('selected')},500);
          kick.play();
          break;
        case "H":
          butH.classList.add('selected');
          setTimeout(()=>{butH.classList.remove('selected')},500);
          ride.play();
          break;
        case "J":
          butJ.classList.add('selected');
          setTimeout(()=>{butJ.classList.remove('selected')},500);
          snare.play();
          break;
        case "K":
          butK.classList.add('selected');
          setTimeout(()=>{butK.classList.remove('selected')},500);
          tink.play();
          break;
        case "L":
          butL.classList.add('selected');
          setTimeout(()=>{butL.classList.remove('selected')},500);
          clap.play();
      }
  }

