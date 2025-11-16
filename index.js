'use strict';

// 1. User Input Handling
let prompt = require("prompt-sync")();

function getValidNumberInput (prompMessage){
    let num;
    let flag = 0;
    do {
        flag++;
        if (flag>1)
         console.log("Invalid input. Please enter a valid number.");
        num = prompt(prompMessage);
    } while (isNaN(num) || num.trim() === ''); 
    return parseFloat(num);
}

function getValidOperatorInput (prompMessage){
    let operator;
    const validOperators = ['+', '-', '*', '/', '%', '**'];
    if (validOperators.includes(operator)) {
            return operator;
        }
        console.log("Invalid operator. Please enter one of +, -, *, /, %, **");
    }

// 2. Basic Arithmetic Operation (Functions and Operators)
function add(a, b) {
    return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return b === 0 ? "Error: Division by zero!" : a / b;
    }

    function modulo(a, b) {
        return b === 0 ? "Error: Division by zero!" : a % b;
    }

    function power(a, b) {
        return a ** b;
    }

// 3. Main Calculator Logic
console.log("This is a simple calculator");

while (true) {
    let num1 = getValidNumberInput("Enter the first number: ");

    let operator = getValidOperatorInput("Enter an operator (+, -, *, /, %, **): ");

    let num2 = getValidNumberInput("Enter the second number: ");

    let result;

    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        case '%':
            result = modulo(num1, num2);
                       result = power(num1, num2);
            break;
        default:
            result = "Unknown operator!";
    }
}
