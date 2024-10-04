const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('.calculator-screen');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;

      
        if (value === 'C') {
            clearScreen();
        }
      
        else if (value === '+' || value === '-' || value === 'x' || value === '/') {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } 
      
        else if (value === '=') {
            calculate();
        } 
      
        else {
            currentInput += value;
            screen.value = currentInput;
        }
    });
});


function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

 
    if (operator === '+') result = prev + curr;
    if (operator === '-') result = prev - curr;
    if (operator === 'x') result = prev * curr;
    if (operator === '/') result = prev / curr;

    screen.value = result;
    currentInput = result.toString();
}


function clearScreen() {
    currentInput = '';
    previousInput = '';
    operator = '';
    screen.value = '';
}
