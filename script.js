//Operator Functions
const add = function(num1, num2){
    return  num1 + num2;
}

const subtract = function(num1, num2){
    return num1 - num2;
}

const multiply = function(num1, num2){
    return num1 * num2;
}

const divide = function(num1, num2){
    if(num2 == 0){
        return 'Error';
    }
    return num1 / num2;
}


//Operate Function take two numbers and an operator from above
const operate = function(num1, num2, operation){
    if(operation == 'add'){
       return add(num1, num2);
    }else if(operation == 'subtract'){
        return subtract(num1, num2);
    }else if(operation == 'multiply'){
        return multiply(num1, num2);
    }else if(operation == 'divide'){
        return divide(num1, num2);
    }
}

//Variables for calcualtor buttons
const buttons = document.querySelector('.buttons-cont');
const numbuttons = document.querySelectorAll('.numbutton');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clearbuttons = document.querySelectorAll('.big-button');
const display = document.querySelector('.display');
const storedNumberDisplay = document.querySelector('.stored-numbers');

//function to display number on calc screen
let displayValue='';
let num2 = '';
const displayMainNum = function(e){
    if(num1){
        displayValue += e.target.textContent;
        display.textContent = `${displayValue}`;
        num2 = displayValue;
    }else{
        displayValue += e.target.textContent;
        display.textContent = `${displayValue}`;
    }
    console.log(num1);
    console.log(num2);
    console.log(displayValue);
    console.log(storedOperator);
}

//function to store operator sign and store current display value upon clicking an operator sign
let num1 = '';
let storedOperator = ''
const setOperator = function(e){
    num1 = displayValue;
    storedOperator = e.target.id;
    storedNumberDisplay.textContent = `${num1} ${e.target.textContent}`;
    if(num1){
        displayValue = '';
    }
}

//function to preform operation
let answer = ''
const prefromOperation = function(){
    if(num1 && num2 && storedOperator){
        storedNumberDisplay.textContent += ` ${num2} =`;
        num1 = +num1;
        num2 = +num2;;
        answer =  operate(num1, num2, storedOperator);
        display.textContent = answer;
    }
}

//fucnton for clearing the display and backspace
const clear = function(e){
    if(e.target.id == 'full-clear'){
        displayValue = '';
        num1 = '';
        num2 = '';
        storedOperator = '';
        display.textContent = '';
        storedNumberDisplay.textContent = '';
    } else if(e.target.id == 'backspace'){
       displayValue = displayValue.substring(0,displayValue.length-1);
       display.textContent = display.textContent.substring(0, display.textContent.length-1);
    }
}
//event listners to populate the display
numbuttons.forEach((button) => {
    button.addEventListener('click', displayMainNum);
});

clearbuttons.forEach((button) => {
    button.addEventListener('click', clear);
});

operator.forEach((button) => {
    button.addEventListener('click', setOperator);
});

equal.addEventListener('click', prefromOperation);