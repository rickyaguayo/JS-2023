'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '16:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },
};

////////DESTRUCTURING OBJECTS/////////
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//renaming variables with destructuring
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 222;
const obj = { a: 333, b: 444, c: 555 };
({ a, b } = obj);
//must be wrapped in parantheses when redefining variables
//js expects a code block if a line starts with curlies
console.log(a, b);

//nested objects
const {
  fri: { open, close },
} = hours;
console.log(open, close);

//destructuring function arguments
restaurant.orderDelivery({
  time: '22:30',
  address: '3517 Dresage Ct',
  mainIndex: 2,
  starterIndex: 3,
});

restaurant.orderDelivery({
  address: '3517 Dresage Ct',
});
//if default is set, it is optional and doesnt need to be defined

////////DESTRUCTURING ARRAYS////////
// const arr = [2, 3, 4];

// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// const [x, y, z] = arr;
// // console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //destructuring from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //destructuring nested arrays
// const nested = [2, 3, [4, 5]];
// const [a, b, c] = nested;
// console.log(a, b, c);

// const [d, e, [f, g]] = nested;
// console.log(d, e, f, g);

// //setting default values
// const [h, i, j] = [8, 9];
// console.log(h, i, j); //because there is no 3rd position, j will be undefined

// const [k = 1, l = 1, m = 1] = [8, 9];
// console.log(k, l, m); //returns 8 9 1
