function solve(input) {
  let n = Number(input.shift());
  let info = {};
  for (let i = 0; i < n; i++) {
    let [plant, rarity] = input.shift().split("<->");
    rarity = Number(rarity);
    if (!info[plant]) {
      info[plant] = {
        rarity: 0,
      };
    }
    info[plant].rarity += rarity;
  }

  while (input[0] !== "Exhibition") {
    let tokens = input.shift().split(/[\s,]+/);
    let command = tokens[0];
    let plant = tokens[1];
    //console.log(command);
    if (!info[plant]) {
      console.log("error");
    } else {
      if (command === "Rate:") {
        let rating = Number(tokens[3]);
        if (!info[plant].rating) {
          info[plant].rating = [];
        }
        info[plant].rating.push(rating);
      } else if (command === "Update:") {
        let newRarity = Number(tokens[3]);
        info[plant].rarity = newRarity;
      } else if (command === "Reset:") {
        info[plant].rating = [];
      }
    }
  }
  console.log('Plants for the exhibition:');
  for (let currPlant in info) {
    let average = 0;
    for (let currRating of info[currPlant].rating) {
      average += currRating;
    }

    if (info[currPlant].rating.length !== 0) {
      average /= info[currPlant].rating.length;
    }
    console.log(
      `- ${currPlant}; Rarity: ${
        info[currPlant].rarity
      }; Rating: ${average.toFixed(2)}`
    );
  }
}

solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
