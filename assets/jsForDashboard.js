//code voor input
function validateInput(int) {
  const intInput = document.getElementById(`integerInput${int}`);
  const input = intInput.value;
  if (input >= 5.5) {
    document.getElementById(`message${int}`).innerHTML = `Het Cijfer is: ${input}`;
    let totalEc = 0;
    if (intInput) {
      let currentElement = intInput.parentElement;
      while (currentElement) {
        if (currentElement.querySelector('.ECstring')) {
          const aantalECElement = currentElement.querySelector('.ECstring');
          totalEc += parseFloat(aantalECElement.innerHTML.slice(0, -3)) || 0;
          break;
        }
        currentElement = currentElement.parentElement;
      }
    }
    addIntToPRB(totalEc);
  } else {
    document.getElementById(`message${int}`).innerHTML = `Het cijfer is onder 5,5 dus moet je deze les herkansen.`;
  }
  deleteElement(`integerInput${int}`)
  deleteElement(`labelCijfer${int}`)
  deleteElement(`buttonClick${int}`)
}
function deleteElement(DeleteId) {
  document.getElementById(DeleteId).remove()
}
//progressbar
let currentProgress = 0;
const maxProgress = 60;

function addIntToPRB(intEC) {
  const progressBar = document.getElementById('progress-bar-dashboard');
  const percentageLabel = document.getElementById('percentage-label');
  if (currentProgress < maxProgress) {
    currentProgress = currentProgress + intEC;
    const progressPercentage = (currentProgress / maxProgress) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    percentageLabel.textContent = `${currentProgress} EC's`;
    document.getElementById(`percentage-label`).innerHTML = `${currentProgress} EC's`;
  }
}