// String Methods: toString, Concat, split

let message = 'Hello I am a boy, and I am not a girl';
console.log(message);
// initializing an array in temp variable
let temp = [1,2,3,4];
// prints data type of temp variable after converting it to the string
console.log(typeof temp.toString());
// prints temp variable data after converting it to the string
console.log(temp.toString());

let textA = 'Hello ';
let textB = 'my name ';
let textC = 'is ABC';
// concat all variables in single variable
let text = textA.concat(textB, textC);
console.log(text);

//OR

// concat all variables in single variable
let textTotal = textA + textB + textC;
console.log(textTotal);

// split something specific from string
console.log(message.split(' '));