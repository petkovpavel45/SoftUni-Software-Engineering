function cardGame(input) {
  let faces = {
    1: 10,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let paint = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  let players = {};

  for (let lines of input) {
    let [name, cards] = lines.split(": ");
    cards = cards.split(", ");

    if (players.hasOwnProperty(name) === false) {
      players[name] = new Set();
    }
    for (let card of cards) {
      players[name].add(card);
    }
  }

  for (let [name, cards] of Object.entries(players)) {
    let power = 0;
    for (let card of cards) {
      let facePower = faces[card[0]];
      let paintPower = paint[card.slice(-1)];
      power += facePower * paintPower;
    }
    console.log(`${name}: ${power}`);
  }
}

cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
