// String Methods: charAt, toUpperCase, toLowerCase, includes, startsWith, endsWith

let message = 'Hello I am a boy';
// prints string message
console.log(message);
// prints character at index 6 in string message
console.log(message.charAt(6));
// prints string message after converting it into upper case letters
console.log(message.toUpperCase());
// prints string message after converting it into lower case letters
console.log(message.toLowerCase());
// prints true if word is found in string message
console.log(message.includes('boy'));
// prints false if word is not found in string message
console.log(message.includes('helter'));
// prints true if string message starts with the defined word
console.log(message.startsWith('Hello'));
// prints false if string message starts with the defined word
console.log(message.startsWith('I'));
// prints true if string message ends with the defined word
console.log(message.endsWith('boy'));
// prints false if string message ends with the defined word
console.log(message.endsWith('I'));