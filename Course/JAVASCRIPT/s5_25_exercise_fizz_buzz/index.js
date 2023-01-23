// Problem : FizzBuzz
// take a Number
// If number is divisible by 3, print Fizz
// If number is divisible by 5, print Buzz
// If number is divisible by both 3 & 5, print FizzBuzz

let number = 15;

if(number % 3 === 0 && number % 5 === 0){
    console.log('FizzBuzz')
} else if(number % 3 === 0){
    console.log('Fizz')
} else if(number % 5 === 0){
    console.log('Buzz')
} else {
    console.log('no')
}