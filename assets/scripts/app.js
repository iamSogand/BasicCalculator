const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCal, calNumber) {
  const calcDescription = `${resultBeforeCal}${operator}${calNumber}`;
  outputResult(currentResult, calcDescription);

}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
 
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-',initialResult, enteredNumber);
}

function multiply() {}

function divide() {}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
