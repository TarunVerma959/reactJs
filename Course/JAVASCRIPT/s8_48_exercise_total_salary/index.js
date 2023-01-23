// Traversing object entries

// property:value
// key = property name
// creating object
const salaries = {
    userA: 1000,
    userB: 2000,
    userC: 3000,
    userD: 4000,
    userE: 5000,
    userF: 6000,
};

// first way
let sum = 0;
// for(let key in salaries){
//     console.log(key, salaries[key]);
//     // sum = sum + salaries[key];
//     sum += salaries[key];
// }
// console.log('1. total is ',sum);

// second way
console.log(Object.values(salaries));
for (let val of Object.values(salaries)){
    sum += val;
}
console.log('2. total is ',sum);
// console.log(user);