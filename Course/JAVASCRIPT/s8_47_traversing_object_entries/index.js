// Traversing object entries

// property:value
// key = property name
// creating object
const user = {
    name: 'nameA',
    age: 10,
    gender: 'Male',
    phone: '12111212',
    email: 'abc@xyz.com',
};

// first way to print property name
for (let key in user){
    console.log(key);
}

// first way to print property with value
for (let key in user){
    console.log(key, user[key]);
}

// first way to print value of properties
for (let val of Object.values(user)){
    console.log(val);
}

// second way to print property name
console.log(Object.keys(user));

// second way to print value of properties
console.log(Object.values(user));

// console.log(user);