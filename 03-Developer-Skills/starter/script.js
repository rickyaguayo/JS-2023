// Remember, we're gonna use strict mode in all scripts now!
"use strict";

////CODING CHALLENGE
const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let tempString = "... ";

  for (let i = 0; i < arr.length; i++) {
    const dailyString = `${arr[i]} degrees Celcius in ${i + 1} days ... `;
    // console.log(dailyString);
    tempString = tempString.concat(dailyString);
  }
  // console.log(tempString);
  return tempString;
};

console.log(printForecast(test2));
