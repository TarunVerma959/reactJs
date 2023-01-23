// Default Parameters

// here setting number2 and number3 as default
function calculateTotal(number1, number2 = 20, number3 = 30){
    let sum = number1 + number2 + number3;
    return sum;
}

let result = calculateTotal(10);
console.log(result);