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
function calculation (a, b, operator) {
    switch (operator){
       case "+": return a + b;
       case "-": return a - b;
       case "*": return a * b;
       case "/": return b === 0 ? "Error: Division by zero!": a / b;
       case "%": return a % b;
       case "**": return a ** b;
       default: return ("Invalid operator. Please enter one of +, -, *, /, %, **");
    }
}

// 3. Main Calculator Logic
console.log("This is your simple calculator");

while (true) {
    let num1 = getValidNumberInput ("Enter the first number: ");
    let num2 = getValidNumberInput ("Enter the second number: ");
    let operator = prompt ("Enter an operator (+, -, *, /, %, **): ");
    let result = calculation (parseFloat (num1), parseFloat (num2), operator)

// 4. Data Analysis and Conditional Output
    console.log(`Result: ${result}`);

    if (typeof result === 'number') {
        if (result > 0) console.log("The result is positive.");
        else if (result < 0) console.log("The result is negative.");
        else console.log("The result is zero.");

        console.log(Number.isInteger(result) ? "The result is an integer." : "The result is a floating-point number.");
        console.log(`The result is ${result % 2 === 0 ? "Even" : "Odd"}.`);

    if (result > 0 && result % 2 === 0) console.log("The result is positive and even.");
    } else if (typeof result === 'string') {
        console.log(`Error Message: ${result}`);
    } else {
        console.log(result ?? "Result is undefined or null, something went wrong!");
    }

// 5. Exit Mechanism
    let question = prompt ("Do you want to perform another calculation? (yes/no): ");

    if (question.toLowerCase() === "no") {
        console. log("Alright, see you later!");
        break;
    }
    console.log("Thank you. I'm happy to help!");
}
