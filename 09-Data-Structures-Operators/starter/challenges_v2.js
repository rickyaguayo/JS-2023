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

////////////CHALLENGE 1////////////
{
  //1
  // const [players1, players2] = game.players;
  // console.log(players1, players2);
  //2
  // const [gk, ...fieldPlayers] = game.players[0];
  // console.log(gk, fieldPlayers);
  //3
  // const allPlayers = [...players1, ...players2];
  // console.log(allPlayers);
  //4
  // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  // console.log(players1Final);
  //5
  // const { team1, x: draw, team2 } = game.odds;
  // console.log(team1, draw, team2);
  //6
  // const printGoals = function (...scored) {
  //   console.log(`Total number of goals: ${scored.length}`);
  //   console.log('Goals scored by:');
  //   for (let i = 0; i < scored.length; i++) {
  //     console.log(scored[i]);
  //   }
  // };
  // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  // printGoals(...game.scored);
  //7
  // team1 < team2 && console.log('Team 1 wins');
  // team2 < team1 && console.log('Team 2 wins');
}

////////////CHALLENGE 2////////////
{
  //1
  const scored = game.scored;
  for (let [goal, player] of scored.entries()) {
    console.log(`Goal ${goal + 1}: ${player} `);
  }

  //2
  const oddsArray = Object.values(game.odds);
  let sum = 0;
  for (const odds of oddsArray) {
    sum += odds;
  }
  console.log(sum / oddsArray.length);

  //3
  const oddsKeys = Object.keys(game.odds);

  for (const key of oddsKeys) {
    // console.log(key);
    console.log(
      `Odds of ${key === `x` ? `draw` : `victory ${game[key]}`}: ${
        game.odds[key]
      }`
    );
  }

  //4
  const scorers = {};
  for (const player of scored) {
    scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
  }
  console.log(scorers);
}

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

////////////CHALLENGE 3////////////
{
  //1
  const events = new Set(gameEvents.values());
  console.log([...events]);

  //2
  gameEvents.delete(64);
  console.log(gameEvents);

  //3
  console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
  );

  //4
  for (const [min, e] of gameEvents) {
    console.log(`[${min <= 45 ? 'FIRST' : 'SECOND'} HALF] ${min}: ${e}`);
  }
}
