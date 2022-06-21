function houseParty(commands) {
  let newArray = [];

  for (let index = 0; index < commands.length; index++) {
    let command = commands[index].split(" ");
    let name = command[0];
    if (command.length === 3) {
      if (newArray.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        newArray.push(name);
      }
    } else {
      if (newArray.includes(name)) {
        newArray.pop(name);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(newArray.join("\n"));
}

houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
