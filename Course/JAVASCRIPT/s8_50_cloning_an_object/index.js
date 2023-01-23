// Cloning an object

// property:value
// key = property name
// creating object

const user = {
    name: 'John',
    age: 23,
    nationality: 'Indian'
};

//manual way for single keys
const copiedUser = {};
copiedUser.name = user.name;
copiedUser.age = user.age;
console.log("user object");
console.log(user);
console.log("using manual method");
console.log(copiedUser);

//automatic way for multiple keys
for(let key in user){
    copiedUser[key] = user[key];
}
console.log("using For loop");
console.log(copiedUser);

//by using assign method
const assignedUserMethod = Object.assign({}, user);
console.log("using assigned method");
console.log(assignedUserMethod);