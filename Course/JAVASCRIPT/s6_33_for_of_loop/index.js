// for in loop

let numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers);
// index returns key data in for in case 
for (let index in numbers) {
    console.log(index);
}

// index returns value data in for of case
for (let index of numbers) {
    console.log(index);
}
