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
console.log(me);
//^^ works because var is hoisted
// console.log(car);
//^^ will prompt init error because let doesnt hoist
// console.log(year);
//^^ will prompt init error because const doesnt hoist

var me = 'Ricky';
let car = 'civic';
const year = '1992';

//FUNCTION HOISTING
console.log(addDecl(2, 3));
//^^ works because function declarations are hoisted
// console.log(addExpr(2, 3));
//^^ prompts init error cause function expressions (declared in a const) arent hoisted
// console.log(addArrow(2, 3));
//^^ prompts init error cause arrow functions (declared in a const) arent hoisted

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
