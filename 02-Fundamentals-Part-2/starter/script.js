/////////FUNCTIONS/////////

// function logger() {
//   console.log("sup");
// }

// logger();
// logger();

// function foodProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = foodProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = foodProcessor(2, 4);
// console.log(appleOrangeJuice);

// FUNCTION DECLARATION
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1992);

// FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1992);
// console.log(age1, age2);

// ARROW FUNCTIONS
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1992, "Ricky"));

// FUNCTIONS WITHIN FUNCTONS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function foodProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(foodProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }

// return `${firstName} retires in ${retirement} years`;
// };

// console.log(1992, "Ricky");

///////////ARRAYS////////////

// const friends = ["Mike", "Steve", "Pete"];
// console.log(friends);

// const years = new Array(1991, 1992, 1996);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Ricky";
// const ricky = [firstName, "Aguayo", 2037 - 1992, friends];
// console.log(ricky);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = years[0];
// const age2 = years[1];
// const age3 = years[years.length - 1];

// console.log(calcAge(age1), calcAge(age2), calcAge(age3));

// const ages = [calcAge(age1), calcAge(age2), calcAge(age3)];
// console.log(ages);

//ARRAY METHODS

//.push() ADDS VALUE TO END OF ARRAY
// const friends = ["Mike", "Steve", "Pete"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength); //returns array length

//.unshift() ADDS VALUE TO BEGINNING OF ARRAY
// friends.unshift("John");
// console.log(friends);

//.pop() REMOVES LAST ELEMENT OF ARRAY
// const popped = friends.pop();
// console.log(friends);
// console.log(popped); //returns popped value

//.shift() REMOVES FIRST ELEMENT OF ARRAY
// friends.shift();
// console.log(friends);

//.indexOf() RETURNS POSITION OF VALUE
// console.log(friends.indexOf("Pete"));
// console.log(friends.indexOf("Bob")); // (returns -1 if value doesnt exist)

// .includes() RETURNS BOOLEAN
// console.log(friends.includes("Steve"));
// console.log(friends.includes("Bob"));

//////////OBJECTS////////////
// const ricky = {
//   firstName: "Ricky",
//   lastName: "Aguayo",
//   age: 2023 - 1992,
//   job: "lazy ass mofo",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(ricky.lastName);
// console.log(ricky["lastName"]);

// const nameKey = "Name";
// console.log(ricky["first" + nameKey]); //bracket notation can be used with expressions
// console.log(ricky["last" + nameKey]);

// const interestedIn = prompt("firstName, lastName, age, job, friends?");

// if (ricky[interestedIn]) {
//   console.log(ricky[interestedIn]);
// } else {
//   console.log("Wrong request u dum bitch");
// }

// Adding to an object
// ricky.location = `Colorado`;
// ricky["twitter"] = `N/A`;
// console.log(ricky);

// const challenge =
//   ricky.firstName +
//   " has " +
//   ricky.friends.length +
//   " friends, and his best friend is called " +
//   ricky.friends[0];

// console.log(challenge);

const ricky = {
  firstName: "Ricky",
  lastName: "Aguayo",
  birthYear: 1992,
  job: "lazy ass mofo",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    this.calcAge();
    const DL = this.hasDriversLicense ? "has" : "has no";
    const challenge =
      this.firstName +
      " is a " +
      this.age +
      "-year old " +
      this.job +
      ", and he " +
      DL +
      " drivers license";
    return challenge;
  },
};

// console.log(ricky.calcAge());

// const challenge = `${
//   ricky.firstName
// } is a ${ricky.calcAge()}-year old, and he ${
//   ricky.hasDriversLicense ? "has" : "has no"
// } drivers license`;

console.log(ricky.getSummary());
