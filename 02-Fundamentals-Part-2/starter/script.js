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

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(1992, "Ricky");
