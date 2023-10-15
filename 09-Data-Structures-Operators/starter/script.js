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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`PASTA BRUH with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

////////DESTRUCTURING OBJECTS/////////
// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// //renaming variables with destructuring
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //setting default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let a = 111;
// let b = 222;
// const obj = { a: 333, b: 444, c: 555 };
// ({ a, b } = obj);
//must be wrapped in parantheses when redefining variables
//js expects a code block if a line starts with curlies
// console.log(a, b);

// //nested objects
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

// //destructuring function arguments
// restaurant.orderDelivery({
//   time: '22:30',
//   address: '3517 Dresage Ct',
//   mainIndex: 2,
//   starterIndex: 3,
// });

// restaurant.orderDelivery({
//   address: '3517 Dresage Ct',
// });
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

/////////SPREAD OPERATOR////////////
// const arr = [1, 2, 3];
// const newArr = [...arr, 4, 5];
// console.log(newArr); //returns array
// console.log(...newArr); //returns values from array

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copying an array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //merge multiple arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //using spread operator in functions
// const ingredients = [
//   // prompt('Ingredient 1?'),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// //spread operator with objects
// const newRestaurant = { foundedIn: 1989, ...restaurant, founder: 'Luca' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name, restaurant.name);

/////////REST//////////
//spread operator will always be on the RIGHT of =
const arr = [1, 2, ...[3, 4]];

//rest operator will always be on the LEFT of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

//can also use both at the same time
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

// add(2, 3);
// add(2, 3, 4, 6, 2, 45);
// add(2, 3, 7, 3, 2, 5, 7);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'pepperoni', 'jalapenos');
// restaurant.orderPizza('pepperoni');

////////SHORT CIRCUITING//////////

//OR ||
// console.log(null || undefined);
// short circuiting with || can be used in place of ternary operators
restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

//AND &&
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('pepperoni', 'mushrooms');
// }

// restaurant.orderPizza && restaurant.orderPizza('pepperoni', 'mushrooms');

// NULLISH COALESCING ??
const guest3 = restaurant.numGuests ?? 10;
// console.log(guest3);

////////LOGICAL ASSIGNMENT OPERATORS//////////
const rest1 = {
  name: 'Las Salsas',
  numGuests: 0,
};

const rest2 = {
  name: 'El Torro',
  owner: 'Maria de la Bodega',
};

//with ||
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//with ??
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

//with &&
rest1.owner = rest1.owner && 'Anonymous'; // this will add the owner property as undefined
// rest1.owner &&= 'Anonymous'; // this will not create owner property

// console.log(rest1);
// console.log(rest2);

//////////////FOR-OF LOOPS/////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// for (const item of menu) {
//   console.log(item);
// }

// for (const item of menu.entries()) {
//   console.log(menu);
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, j] of menu.entries()) {
//   console.log(`${i + 1}: ${j}`);
// }

///////////ENHANCED OBJECT LITERALS///////////
const obj1 = {
  name: 'ricky',
};

const obj2 = {
  age: 31,
  favColor: 'blue',
  obj1,

  printName(name) {
    console.log(name);
  },
};

// console.log(obj2);
// obj2.printName('ricky');

////////////OPTIONAL CHAINING////////////////
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

//with nullish coalescing
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

//checking if methods exist
// console.log(restaurant.order?.(1, 0) ?? 'Method doesnt exist');
// console.log(restaurant.orderRisotto?.(1, 0) ?? 'Method doesnt exist');

//checking if array exist
// const users = [{ name: 'ricky', age: 31 }];
const users = [];
// console.log(users[0]?.name ?? 'User array empty');

///////////LOOPING THROUGH OBJECT KEYS, VALUES AND ENTRIES/////////
//KEYS
const keys = Object.keys(restaurant.openingHours);
// console.log(typeof keys);
let openStr = `we are open ${keys.length} days: `;

for (const day of keys) {
  openStr += `${day}, `;
}
// console.log(openStr);

//VALUES
const values = Object.values(restaurant.openingHours);
// console.log(typeof values);

//ENTRIES (entire object)
const entries = Object.entries(restaurant.openingHours);
// console.log(typeof entries);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }

///////////////////SETS AND MAPS///////////////////
//Sets
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

// console.log(orderSet); //returns {'Pasta', 'Pizza', 'Risotto'}
// console.log(new Set('Ricky')); // returns {'R', 'i', 'c', 'k', 'y'}

// console.log(orderSet.size); // returns 3
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];
// const staffSet = new Set(staff); // this creates a set
const staffSet = [...new Set(staff)]; // this creates an array
// console.log(staffSet);

// console.log(new Set('rickyaguayo').size);

//MAPS
const rest = new Map();
rest.set('name', 'Classico Mexicano');
rest.set(1, 'Chihuahua, MX');
rest.set(2, 'Guadalajara, MX');

rest
  .set('staff', ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'Open!')
  .set(false, 'Closed.');

// console.log(rest.get(true));

const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// console.log(rest.has('staff'));
// console.log(rest.delete(2));
// console.log(rest.size);
// console.log(rest.clear());

// console.log(rest.set([1, 2], 'Test')); // this will work, but you wont be able to retrieve 'Test'. the key should be a variable
// console.log(rest.get[1, 2]) // this will not return 'Test'
// const arr1 = [1, 2];
// console.log(rest.set(arr1, 'Test'));
// console.log(rest.get(arr1));

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C#'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

// console.log(question);

//converting objects to maps
const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

//quiz example
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// console.log([...question]); // turns map into array

//STRINGS
const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal')); //case sensitive

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -2));

const checkMidSeat = function (seat) {
  console.log(
    seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
      ? 'Middle seat'
      : 'Not a middle seat'
  );
  // console.log(seat.slice(-1));
};

// checkMidSeat('11B');
// checkMidSeat('23C');
// checkMidSeat('3E');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

const passenger = 'rICky';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

const correctName = name => {
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  return nameCorrect;
};
// console.log(correctName('riCARdo'));

const email = '  rIcKy@RIckY.com  \n';
// const lowerEmail = email.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const shortcutEmail = email.toLowerCase().trim();
// console.log(shortcutEmail);

const priceGB = '288,98%';
const priceUS = priceGB.replace('%', '$').replace(',', '.');
// console.log(priceUS);

const announcement = 'Everyone gets some money. There will be money for all!';
// console.log(announcement.replace('money', 'booty'));
// console.log(announcement.replace(/money/g, 'booty')); //regex
// console.log(announcement.replaceAll('money', 'booty'));

const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('Boeing'));
// console.log(plane2.startsWith('Airb'));

// if (plane2.startsWith('Airbus') && plane2.endsWith('neo'))
//   console.log('Airbus Family');

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('not getting on board son');
  } else {
    console.log('welcome aboard son');
  }
};

// checkBaggage('laptop, Food, pocket Knife');
// checkBaggage('socks, camera');
// checkBaggage('SNACKS, GUN');

// console.log('a+very+nice+string'.split('+'));
// console.log('Ricky Aguayo'.split(' '));

const [first, last] = 'Ricky Aguayo'.split(' ');
console.log(first, last);

const newName = ['Mr.', first, last.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('ricky aguayo');

const message = 'Please go to gate 11!';
console.log(message.padStart(30, '+').padEnd(35, '+'));
// console.log(message.padEnd(35, '+'));

const maskCC = function (num) {
  const str = num + '';
  const last = str.slice(-4);
  return last.padStart(str.length, 'x');
};

console.log(maskCC(1123487253485723904));
console.log(maskCC('7518734812734019283'));

const message2 = 'Bad weather, all departures delayed. ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(2);
planesInLine(6);
planesInLine(1);
