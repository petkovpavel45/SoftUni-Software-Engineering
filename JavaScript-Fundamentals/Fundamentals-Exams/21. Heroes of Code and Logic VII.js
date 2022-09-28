function solve(input) {
  let n = Number(input.shift());
  let heroes = {};
  for (let index = 0; index < n; index++) {
    let [name, hp, mp] = input.shift().split(" ");
    hp = Number(hp);
    mp = Number(mp);
    if (!heroes[name]) {
      heroes[name] = {
        hp: 0,
        mp: 0,
      };
    }
    heroes[name].hp += hp;
    heroes[name].mp += mp;
  }

  while (input[0] !== "End") {
    let tokens = input.shift().split(" - ");
    let command = tokens[0];
    let name = tokens[1];

    if (command === "CastSpell") {
      let mpNeed = Number(tokens[2]);
      let spellName = tokens[3];
      if (heroes[name].mp >= mpNeed) {
        heroes[name].mp -= mpNeed;
        console.log(
          `${name} has successfully cast ${spellName} and now has ${heroes[name].mp} MP!`
        );
      } else {
        console.log(`${name} does not have enough MP to cast ${spellName}!`);
      }
    } else if (command === "TakeDamage") {
      let dmg = Number(tokens[2]);
      let attacker = tokens[3];
      heroes[name].hp -= dmg;
      if (heroes[name].hp > 0) {
        console.log(
          `${name} was hit for ${dmg} HP by ${attacker} and now has ${heroes[name].hp} HP left!`
        );
      } else {
        delete heroes[name];
        console.log(`${name} has been killed by ${attacker}!`);
      }
    } else if (command === "Recharge") {
      let amount = Number(tokens[2]);
      let maxMp = Math.min(200 - heroes[name].mp, amount);
      heroes[name].mp += maxMp;
      console.log(`${name} recharged for ${maxMp} MP!`);
    } else if (command === "Heal") {
      let amount = Number(tokens[2]);
      let maxHp = Math.min(100 - heroes[name].hp, amount);
      heroes[name].hp += maxHp;
      console.log(`${name} healed for ${maxHp} HP!`);
    }
  }
  for (let hero of Object.entries(heroes)) {
    console.log(hero[0]);
    console.log(`  HP: ${hero[1].hp}`);
    console.log(`  MP: ${hero[1].mp}`);
  }
}

solve([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
