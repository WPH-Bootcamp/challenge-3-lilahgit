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

// 2. Basic Arithmetic Operation (Functions and Operators)
function calculation (a, operator, b) {
    switch (operator){
       case "+": return a + b;
       case "-": return a - b;
       case "*": return a * b;
       case "/": return b === 0 ? "Error: Division by zero!": a / b;
       case "%": return b === 0 ? "Error: Division by zero!": a % b;
       case "**": return a ** b;
       default: return ("Invalid operator. Please enter one of +, -, *, /, %, **");
    }
}

// 3. Main Calculator Logic
console.log("This is a simple calculator");

while (true) {
    let num1 = getValidNumberInput("Enter the first number: ");

    let operator = getValidOperatorInput("Enter an operator (+, -, *, /, %, **): ");

    let num2 = getValidNumberInput("Enter the second number: ");

    let result = calculation (parseInt(num1), parseInt (num2), operator);

    console.log ("The result is:", result);
}
