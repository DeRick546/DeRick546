// code for dashboard

const progressBar = document.getElementById('progress-bar');
const percentageLabel = document.getElementById('percentage-label');

let currentProgress = 0;
const maxProgress = 60;
// add 1 to bar = link 
incrementButton1.addEventListener('click', () => {
  if (currentProgress < maxProgress) {
    currentProgress++;
    updateProgressBar();
  }
});

function updateProgressBar() {
  const progressPercentage = (currentProgress / maxProgress) * 100;
  progressBar.style.width = progressPercentage + '%';
  percentageLabel.textContent = currentProgress + "EC's";
}
function deleteElement(DeleteId) {
  document.getElementById(DeleteId).remove()
}

//main base of ops!
function validateInput(int) {
  const arrayinput = [
    document.getElementById('integerInput0').value,document.getElementById('integerInput1').value,
    document.getElementById('integerInput2').value,document.getElementById('integerInput3').value,
    document.getElementById('integerInput4').value,document.getElementById('integerInput5').value,
    document.getElementById('integerInput6').value,document.getElementById('integerInput7').value,
    document.getElementById('integerInput8').value,document.getElementById('integerInput9').value,
    document.getElementById('integerInput10').value,document.getElementById('integerInput11').value,
    document.getElementById('integerInput12').value,document.getElementById('integerInput13').value,
    document.getElementById('integerInput14').value,document.getElementById('integerInput15').value,
    document.getElementById('integerInput16').value]

    const input = arrayinput[int]
  const arraymessage = [
    ,document.getElementById('message0'),document.getElementById('message1'),document.getElementById('message2'),
    ,document.getElementById('message3'),document.getElementById('message4'),document.getElementById('message5')
    ,document.getElementById('message6'),document.getElementById('message7'),document.getElementById('message8')
    ,document.getElementById('message9'),document.getElementById('message10'),document.getElementById('message11')
    ,document.getElementById('message12'),document.getElementById('message13'),document.getElementById('message14')
    ,document.getElementById('message15'),document.getElementById('message16'),]

  if (int == 0){
   
    //addIntToPRB()
    if (input >= 5.5) {
      document.getElementById('message0').innerHTML = `Het Cijfer is: ${input}`;
      //addIntToPGB()
    } else {
      document.getElementById('message0').innerHTML = `Het cijfer is onder 5,5 dus moet je deze les herkansen.`;
    }
    deleteElement('integerInput0')
    deleteElement('labelCijfer0')
    deleteElement('buttonClick0')
  }
  if (int == 1){
    console.log("werkt if1t")
    //addIntToPRB()
    if (input >= 5.5) {
      document.getElementById('message1').innerHTML = `Het Cijfer is: ${input}`;
      //addIntToPGB()
    } else {
      document.getElementById('message1').innerHTML = `Het cijfer is onder 5,5 dus moet je deze les herkansen.`;
    }
    deleteElement('integerInput1')
    deleteElement('labelCijfer1')
    deleteElement('buttonClick1')
  }
}

function addIntToPRB(intEC) {
  if (currentProgress < maxProgress) {
    currentProgress = currentProgress + intEC;
    updateProgressBar();
  }
}
function updateProgressBar() {
  const progressPercentage = (currentProgress / maxProgress) * 100;
  progressBar.style.width = progressPercentage + '%';
  percentageLabel.textContent = currentProgress + "EC's";
}