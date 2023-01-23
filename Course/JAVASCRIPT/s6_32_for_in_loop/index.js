// for in loop

//creating object
const objectA = {
    name : 'nameA',
    age  : 10,
}
for (let key in objectA) {
    console.log(key, objectA[key]);
}

//  OR

let numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);
for (let index in numbers) {
    console.log(index, numbers[index]);
}
