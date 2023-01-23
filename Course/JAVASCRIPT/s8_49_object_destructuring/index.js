// Object Destructuring

// property:value
// key = property name
// creating object

const user = {
    name: 'John',
    age: 23,
    favBook:{
        bookname: 'Love and Thunder',
        bookauthor: 'authA'
    },
};

console.log(user.name);
console.log(user.age);
console.log(user.favBook);
console.log(user.favBook.bookauthor);
console.log(user.favBook.bookname);

// Object Destructuring for user

const {name, age, favBook} = user;

console.log(name);
console.log(age);
console.log(favBook);
console.log(favBook.bookauthor);
console.log(favBook.bookname);

// Object Destructuring for favBook

const {bookauthor, bookname} = favBook;

console.log(name);
console.log(age);
console.log(favBook);
console.log(bookauthor);
console.log(bookname);