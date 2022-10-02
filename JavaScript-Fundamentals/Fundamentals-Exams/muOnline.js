function solve(str) {
  let arr = str.split("|");
  let health = 100;
  let countBitcoins = 0;
  let countRoom = 0;
  let isDead = false;
  for (let i = 0; i < arr.length; i++) {
    let tokens = arr[i].split(" ");
    countRoom++;
    if (tokens[0] === "potion") {
      let amount = Number(tokens[1]);
      let maxHp = Math.min(100 - health, amount);
      health += maxHp;
      console.log(`You healed for ${maxHp} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (tokens[0] === "chest") {
      let bitcoin = Number(tokens[1]);
      countBitcoins += bitcoin;
      console.log(`You found ${bitcoin} bitcoins.`);
    } else {
      let monster = tokens[0];
      let att = Number(tokens[1]);
      health -= att;
      if (health > 0) {
        console.log(`You slayed ${monster}.`);
      } else {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${countRoom}`);
        isDead = true;
        break;
      }
    }
  }
  if (!isDead) {
    console.log("You've made it!");
    console.log(`Bitcoins: ${countBitcoins}`);
    console.log(`Health: ${health}`);
  }
}

solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
