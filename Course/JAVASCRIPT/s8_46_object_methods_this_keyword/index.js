// Object Method and this keyword

// property:value
// creating object
const user = {
    name: 'nameA',
    age: 10,
    isMarried: true,
    friends: ['frndA', 'frndB'],
    selectColor: null,
    calculateAge: function(){
                        console.log(`My age is ${this.age}`, `and my name is ${this.name}`);
                    }
};


user.calculateAge();
// console.log(user);
