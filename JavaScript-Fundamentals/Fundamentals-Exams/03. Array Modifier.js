function arrayModifier(array) {
  let modifierArr = array.shift().split(" ").map(Number);
  let commands = array.shift();
  while (commands !== "end") {
    let token = commands.split(" ");
    let command = token[0];
    let firstIndex = Number(token[1]);
    let secondIndex = Number(token[2]);
    if (command === "swap") {
      let first = modifierArr.splice(firstIndex, 1, modifierArr[secondIndex]);
      modifierArr.splice(secondIndex, 1, first[0]);
    } else if (command === "multiply") {
      let first = modifierArr[firstIndex] * modifierArr[secondIndex];
      modifierArr.splice(firstIndex, 1, first);
    } else if (command === "decrease") {
      let res = modifierArr.map((num) => num - 1);
      modifierArr = res;
    }

    commands = array.shift();
  }
  console.log(modifierArr.join(", "));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
