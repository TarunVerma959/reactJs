// Switch case with multiple logical operators
// Take a Number
// number > 0
// number === 0
// number < 0

// let number = 1;
// let number = 0;
let number = -1;

switch (true) {
    case number > 0:
        console.log('given number is positive')
        break;
    case number === 0:
        console.log('given number is zero')
        break;
    case number < 0:
        console.log('given number is negative')
        break;
}