// code for dashboard link

//code for progressbar
const progressBar = document.getElementById('progress-bar');
const incrementButton1 = document.getElementById('increment-button1');
const incrementButton25 = document.getElementById('increment-button25');
const percentageLabel = document.getElementById('percentage-label');

let currentProgress = 0;
const maxProgress = 60;
// add 1 to bar = link 
incrementButton1.addEventListener('click',updateProgressBar){
  if (currentProgress < maxProgress) {
    currentProgress++;
    updateProgressBar();
  }
};
incrementButton25.addEventListener('click', updateProgressBar){
  if (currentProgress < maxProgress) {
    currentProgress = currentProgress + 0.25;
    updateProgressBar();
  }
};


function updateProgressBar() {
  const progressPercentage = (currentProgress / maxProgress) * 100;
  progressBar.style.width = progressPercentage + '%';
  percentageLabel.textContent = currentProgress + "EC's";
}

//code for input dashboard
function deleteElement(DeleteId) {
  document.getElementById(DeleteId).remove()
}
function validateInput() {
  const input = document.getElementById('integerInput').value;
  const message = document.getElementById('message');
 
  //link to progress bar and ECS
  if (input >= 5.5) {
    message.textContent = `Het Cijfer is: ${input}`;
    console.log("wollah");
  } else {
    message.textContent = `Het cijfer is onder 5,5 dus moet je deze les herkansen.`;
    console.log("NOTwollah");
  }
  
  deleteElement('integerInput')
  deleteElement('labelCijfer')
  deleteElement('buttonClick')
}
