// adding modifying deleting properties

// property:value
// creating object
const user = {
        name: 'nameA',
        age: 10,
        hobby: 'reading',
        isMarried: true,
    };

console.log(user);

// adding property in user using dot notation
user.email = 'abc@gmail.com'
console.log(user);

// adding property in user using bracket notation
user['phone'] = '1245124512'
console.log(user);

// updating property in user using dot notation
user.age = user.age + 5;
user.phone = '14512'
console.log(user);

// delete
delete user.age;
console.log(user);