// Problem : FizzBuzz using ternary operator
// then ?
// else :
// take a Number
// If number is divisible by 3, print Fizz
// If number is divisible by 5, print Buzz
// If number is divisible by both 3 & 5, print FizzBuzz

let number = 18;

console.log(
    number % 3 === 0 && number % 5 === 0 ? 'FizzBuzz'
    : number % 3 === 0 ? 'Fizz'
    : number % 5 === 0 ? 'Buzz'
    : 'no'
    ); 