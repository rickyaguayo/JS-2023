'use strict';
///////////////////////////////////////
// More practice

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsArr = flights.split('+');

for (const flight of flightsArr) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.includes('Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`;
  console.log(output.padStart(45));
}

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');
const text = document.querySelector('textarea');

const second = [];

const camelCase = function () {
  const textLower = text.value.toLowerCase().split('\n');

  for (const t of textLower) {
    const first = [];
    const [one, two] = t.trim().split('_');
    const twoJoin = two.replace(two[0], two[0].toUpperCase());
    first.push(one, twoJoin);
    const spaces = first.join('').padEnd(20, ' ');
    second.push(spaces);
  }

  for (const [i, s] of second.entries()) {
    console.log(`${s}${'✅'.repeat(i + 1)} `);
  }
};

// button.addEventListener('click', camelCase);

///////////////////////////////////////
// Coding Challenge #3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
//my way
// const eventSet = new Set([]);

// for (const [, e] of gameEvents) {
//   eventSet.add(e);
// }

// const events = [...eventSet];
// console.log(events);

//jonas way
const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
// console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happened, on average every ${90 / gameEvents.size} minutes`
// );

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽️ GOAL

// for (const [min, e] of gameEvents) {
//   let half = min <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
//   console.log(`${half} ${min}: ${e}`);
// }

//////////////////////////////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////
// Coding Challenge #2

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`);
// }

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let sum = 0;
let odds = Object.values(game.odds);

for (const odd of odds) {
  sum += odd;
}
// console.log(sum / odds.length);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// let teams = Object.keys(game.odds);
let teams = Object.entries(game.odds);
// console.log(teams);

for (const [key, value] of teams) {
  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  // console.log(`Odd of ${teamStr}: ${value}`);
  // console.log(key);
  // console.log(value);
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

const scorers = {};
let players = game.scored;
// console.log(game.scored.entries());

for (const player of players) {
  scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
}

// for (const [i, player] of players.entries()) {
//   console.log(i);
//   console.log(player);
// }

// console.log(scorers);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

GOOD LUCK 😀
*/

//1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
// console.log(players1, players2);

//2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
const printGoals = function (...playerName) {
  console.log(`${playerName.length} goals were scored`);
  console.log(`Goals scored by:`);
  for (let i = 0; i < playerName.length; i++) {
    console.log(playerName[i]);
  }
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// team1 < team2 && console.log('Team1 wins');
// team1 < team2 || console.log('Team2 wins');
