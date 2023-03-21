// functions for add sub mul div
function add(first,second) {return first + second}
function subtract(first,second) {return first - second}
function multiply(first,second) {return first * second}
function divide(first,second) {return first / second}

function operate(first, second, operator) {
    if (operator === "+") {return add(first,second)}
    else if (operator === "-") {return subtract(first,second)}
    else if (operator === "*") {return multiply(first,second)}
    else if (operator === "/") {return divide(first,second)}

}


let first;
let second;
let operator;