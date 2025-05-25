// script.js
let isOn = true; // Track power state

function appendToDisplay(value) {
    if (isOn) {
        const display = document.getElementById('display');
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('**2', '**2')); // Handle square
    } catch (error) {
        display.value = 'Error';
    }
}

function power() {
    isOn = !isOn;
    const display = document.getElementById('display');
    display.value = isOn ? '' : 'OFF';
}