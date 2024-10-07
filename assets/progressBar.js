//code for progress-bar
/*
const progressBar = document.getElementById("progress");
let currentProgress = 0;

function increaseProgress() {
  if (currentProgress < 100) {
    currentProgress += 5;
    progressBar.style.width = currentProgress + "px";
  }
}

function resetProgress() {
  currentProgress = 0;
  progressBar.style.width = "0px";
}*/
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}