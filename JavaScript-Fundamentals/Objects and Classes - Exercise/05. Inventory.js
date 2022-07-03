function inventory(input) {
  let heroes = [];

  for (let lines of input) {
    let tokens = lines.split(" / ");
    let hero = tokens[0];
    let level = Number(tokens[1]);
    let items = tokens[2];
    let currHero = {
      hero,
      level,
      items,
    };
    heroes.push(currHero);
  }
  let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

  for (let hero of sortedHeroes) {
    console.log(`Hero: ${hero.hero}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
