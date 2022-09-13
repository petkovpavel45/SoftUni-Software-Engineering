function solve(input) {
  let towns = {};
  input.pop();
  let sailIndex = input.indexOf("Sail");
  let townsInput = input.slice(0, sailIndex);
  let actionInput = input.slice(sailIndex + 1);

  for (let tokens of townsInput) {
    tokens = tokens.split("||");
    let city = tokens[0];
    let population = Number(tokens[1]);
    let gold = Number(tokens[2]);
    if (!towns[city]) {
      towns[city] = {
        population: 0,
        gold: 0,
      };
    }
    towns[city].population += population;
    towns[city].gold += gold;
  }
  for (let tokens of actionInput) {
    tokens = tokens.split("=>");
    let command = tokens[0];
    let town = tokens[1];
    if (command === "Plunder") {
      let killedPeople = Number(tokens[2]);
      let stealedGold = Number(tokens[3]);
      towns[town].population -= killedPeople;
      towns[town].gold -= stealedGold;
      console.log(
        `${town} plundered! ${stealedGold} gold stolen, ${killedPeople} citizens killed.`
      );

      if (towns[town].population <= 0 || towns[town].gold <= 0) {
        delete towns[town];
        console.log(`${town} has been wiped off the map!`);
      }
    } else if (command == "Prosper") {
      let goldAdd = Number(tokens[2]);
      if (goldAdd < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        towns[town].gold += goldAdd;
        console.log(
          `${goldAdd} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`
        );
      }
    }
  }
  towns = Object.entries(towns);
  if (towns.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`
    );
    for (let town of towns) {
      let name = town[0];
      let population = town[1].population;
      let gold = town[1].gold;
      console.log(
        `${name} -> Population: ${population} citizens, Gold: ${gold} kg`
      );
    }
  } else {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  }
}

solve([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
