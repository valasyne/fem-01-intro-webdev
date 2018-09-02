let runningTotal = 0;
// Waiting for user input (string)
let buffer = '0';
// Keep track of previous (like keeping track of last)
let previousOperator = null;
const screen = document.querySelector('.screen');

// At the container level, listen for button clicks
const containr = document.querySelector('.calc-buttons');
containr.addEventListener('click', function(event) {
  // console.log(event.target.innerText);
  buttonClick(event.target.innerText);
});

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    console.log(value);
    handleSymbol(value);
  } else {
    console.log(value);
    handleNumber(value);
  }
  rerender();
}

function handleNumber(value) {
  if (buffer === '0') {
    buffer = value;
  } else {
    buffer += value;
  }
  rerender();
}

function handleSymbol(value) {
  switch (value) {
    case 'C':
      buffer = '0';
      runningTotal = 0;
      previousOperator = null;
      break;
    case '=':
      console.log('here');
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = '' + runningTotal;
      runningTotal = 0;
    case '←':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        // Probably, a mistake, see substring below
        buffer = buffer.substr(0, buffer.length - 1);
        // buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    default:
      handleMath(value);
      break;
  }
}

function handleMath(value) {
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = value;
  buffer = '0';
}

function flushOperation(intBuffer) {
  console.log('here flush');
  if (previousOperator === '+') {
    runningTotal += intBuffer;
  } else if (previousOperator === '-') {
    runningTotal -= intBuffer;
  } else if (previousOperator === '×') {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function rerender() {
  screen.innerText = buffer;
}
