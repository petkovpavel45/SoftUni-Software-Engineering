function gladiatorInventory(input) {
  let inventory = input.shift().split(" ");

  for (let elements of input) {
    let command = elements.split(" ")[0];
    let item = elements.split(" ")[1];
    let indexOfItem = inventory.indexOf(item);

    if (command === "Buy") {
      if (!inventory.includes(item)) {
        inventory.push(item);
      }
    } else if (command === "Trash") {
      if (indexOfItem > -1) {
        inventory.splice(indexOfItem, 1);
      }
    } else if (command === "Repair") {
      if (indexOfItem > -1) {
        inventory.splice(indexOfItem, 1);
        inventory.push(item);
      }
    } else if (command === "Upgrade") {
      let equipment = item.split("-")[0];
      let upgradeItem = item.split("-")[1];

      if (inventory.includes(equipment)) {
        let indexOfEqipment = inventory.indexOf(equipment);
        inventory.splice(indexOfEqipment + 1, 0, `${equipment}:${upgradeItem}`);
      }
    }
  }
  console.log(inventory.join(" "));
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
