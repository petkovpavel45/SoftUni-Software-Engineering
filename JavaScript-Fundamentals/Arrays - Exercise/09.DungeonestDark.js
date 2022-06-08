function dungeonestDark(input) {
    let health = 100;
    let coins = 0;
    let rooms = input[0].split("|");
    let isFiniesh = true;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(" ");
        if (room[0] === "potion") {
            let currHealth = Number(room[1]);
            if (health <= 100) {
                if(health + currHealth >= 100){
                  currHealth = 100 - health;
                  health = 100  
                } else {
                    health += currHealth
                }
            }
            console.log(`You healed for ${currHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (room[0] === "chest") {
            let foundCoins = room[1];
            coins += Number(foundCoins);
            console.log(`You found ${foundCoins} coins.`);
        } else {
            let monsterName = room[0];
            let attack = room[1];
            health -= attack;
            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${i + 1}`);
                isFiniesh = false;
                break;
            }
        }
    }
    if (isFiniesh) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])