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
const operate = function(num1, num2, operator){
    return operator(num1, num2);
}

//Variables for calcualtor buttons
const buttons = document.querySelector('.buttons-cont');
const numbuttons = document.querySelectorAll('.numbutton');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clearbuttons = document.querySelectorAll('.big-button');
const display = document.querySelector('.display');

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
if(e.target.id == 'divide'){
    storedOperator = '/';
}else if(e.target.id == 'multiply'){
    storedOperator = '*';
}else{
    storedOperator = e.target.textContent;
}
if(num1){
    displayValue = '';
}
}

//function to preform operation
const prefromOperation = function(){
    
}

//fucnton for clearing the display and backspace
const clear = function(e){
    if(e.target.id == 'full-clear'){
        displayValue = ''
        display.textContent = '';
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