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
    let num;
    let flag = 0;
    do {
        flag++;
        if (flag>1)
         console.log("Invalid operator. Please enter one of +, -, *, /, %, **");
        num = prompt(prompMessage);
    } while (isNaN(num) || num.trim() === ''); 
    return parseFloat(num);
}
