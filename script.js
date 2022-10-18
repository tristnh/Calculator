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