function solve(input) {
  let items = input.shift().split(", ");

  while (input[0] !== "Craft!") {
    let [commands, item] = input.shift().split(" - ");
    if (commands === "Collect") {
      if (!items.includes(item)) {
        items.push(item);
      }
    } else if (commands === "Drop") {
      if (items.includes(item)) {
        let indexOfItem = items.indexOf(item);
        items.splice(indexOfItem, 1);
      }
    } else if (commands === "Combine Items") {
      let [oldItems, newItems] = item.split(":");
      if (items.includes(oldItems)) {
        let indexOfItem = items.indexOf(oldItems);
        items.splice(indexOfItem + 1, 0, newItems);
      }
    } else if (commands === "Renew") {
        if (items.includes(item)) {
            let indexOfItem = items.indexOf(item);
            let currItem = items.splice(indexOfItem, 1);
            items.push(currItem);
        }
    }
  }
  console.log(items.join(", "));
}

solve(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
console.log("------");
solve([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
