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
console.log(this); // will return window object

//with a simple function call
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //wil return undefined because simple function calls return undefined
};
calcAge(1992);

//with an arrow function
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //will return window object because arrow functions do not have their own this property. this means it will find its closest parent function and borrow its 'this' keywork (lexical this)
};
calcAge(1990);

//with a method(function in an object)
const ricky = {
  year: 1992,
  calcAge: function () {
    console.log(this); //will return ricky object (owner of the method)
  },
};
ricky.calcAge();

const monica = {
  year: 1991,
};

monica.calcAge = ricky.calcAge; //adds the calcAge method to the monica object
monica.calcAge(); //this works because although the calcAge function was created in the ricky object, monica has it now and can call it as well
