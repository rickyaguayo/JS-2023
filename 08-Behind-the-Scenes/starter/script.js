'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//     }
//     console.log(millenial);
//   }
//   printAge();
//   return age;
// }

// const hello = true;
// if (hello) {
//   console.log(firstName);
// }
// const firstName = 'Ricky';
// calcAge(1992);

////////HOISTING////////

//VARIABLE HOISTING
// console.log(me);
//^^ works because var is hoisted
// console.log(car);
//^^ will prompt init error because let doesnt hoist
// console.log(year);
//^^ will prompt init error because const doesnt hoist

// var me = 'Ricky';
// let car = 'civic';
// const year = '1992';

//FUNCTION HOISTING
// console.log(addDecl(2, 3));
//^^ works because function declarations are hoisted
// console.log(addExpr(2, 3));
//^^ prompts init error cause function expressions (declared in a const) arent hoisted
// console.log(addArrow(2, 3));
//^^ prompts init error cause arrow functions (declared in a const) arent hoisted

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

///////THIS KEYWORD////////
// console.log(this); // will return window object

//with a simple function call
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); //wil return undefined because simple function calls return undefined
// };
// calcAge(1992);

//with an arrow function
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); //will return window object because arrow functions do not have their own this property. this means it will find its closest parent function and borrow its 'this' keywork (lexical this)
// };
// calcAge(1990);

//with a method(function in an object)
// const ricky = {
//   year: 1992,
//   calcAge: function () {
//     console.log(this); //will return ricky object (owner of the method)
//   },
// };
// ricky.calcAge();

// const monica = {
//   year: 1991,
// };

// monica.calcAge = ricky.calcAge; //adds the calcAge method to the monica object
// monica.calcAge(); //this works because although the calcAge function was created in the ricky object, monica has it now and can call it as well

// const ricky = {
//   firstName: 'ricky',
//   year: 1992,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//pre-ES6 solution to this with simple function call
//   const self = this; //used to remedy 'this' being undefined in a function inside a method
//   const isMillenial = function () {
//     console.log(self);
//     console.log(self.year >= 1981 && self.year <= 1996);
//   };
//   isMillenial();
// },

//post-ES6 solution to this with simple function call. works because arrow functions dont have 'this' so will look up to object for the 'this' from the parent
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// ricky.greet(); //returns 'Hey undefined' because arrow functions don't have a this keyword. although it is inside of an object, an object isnt technically a block. its an object literal which doesnt have anything to do with scope. so in this case, the 'this' will refer to the global window scope and wont be able to find the greet method
// ricky.calcAge();

////////ARGUMENTS KEYWORD/////////
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 6, 3);

// function addDecl(a, b) {
//   console.log(typeof arguments);
//   return a + b;
// }

// addDecl(2, 5);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5);`

////////PRIMITIVE TYPES VS OBJECTS (REFERENCE TYPES)//////

//primitive types
let lastName = 'Tamez';
let oldLastName = lastName;
lastName = 'Aguayo';
console.log(lastName, oldLastName); //Aguayo, Tamez

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Tamez',
  age: 30,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Aguayo';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);
//last name will be Aguayo for both even though we only changed the last name in marriedJessica

//copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Tamez',
  age: 30,
  family: ['bob', 'alice'],
};

const jessicaCopy = Object.assign({}, jessica2); //this helps change properties in an object that has the same call stack reference as another object
jessicaCopy.lastName = 'Aguayo';

jessicaCopy.family.push('mary');
jessicaCopy.family.push('john');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
//family array will both have 4 items
