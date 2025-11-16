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
    const validOperators = ['+', '-', '*', '/', '%', '**'];
    let operator;
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
