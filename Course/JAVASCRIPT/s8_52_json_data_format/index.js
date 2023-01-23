// JSON Data Format

// normal object data
const user = {
    name: 'john',
    age: 40,
}
console.log(user);

// converting normal object data to json format data
const jsonData = JSON.stringify(user);
console.log(jsonData);

// converting json format data to normal object data
const normalData = JSON.parse(jsonData);
console.log(normalData);