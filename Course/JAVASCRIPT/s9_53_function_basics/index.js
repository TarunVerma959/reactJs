// Javascript Function basics

// simple method to display a string
const message = `My name is John 56 years old.`;
console.log(message);

//Function Declaration
function aboutMe(name, age){
    const functionMessage = `My name is ${name} ${age} years old.`;
    console.log(functionMessage);
}

//function call
aboutMe();
//function call with parameters
aboutMe('John', 56);
aboutMe('Ajay', 20);


// addition of two values without function
let num1 = 10;
let num2 = 20;

let total = num1 + num2;
console.log(total);


// addition of two values with function
function calculateTotal(number1, number2){
    let sum = number1 + number2;
    return sum;
}

let result = calculateTotal(10 , 20);
console.log(result);