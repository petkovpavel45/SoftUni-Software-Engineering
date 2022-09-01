function worldTour(input) {
  let stops = input.shift();

  while (input[0] !== "Travel") {
    let tokens = input.shift().split(":");
    let command = tokens[0];

    if (command === "Add Stop") {
      let index = Number(tokens[1]);
      let string = tokens[2];
      if (stops[index] !== undefined) {
        let before = stops.slice(0, index);
        let after = stops.slice(index);
        stops = before + string + after;
      }
      console.log(stops);
    } else if (command === "Remove Stop") {
      let startIndex = Number(tokens[1]);
      let stopIndex = Number(tokens[2]);
      if (stops[startIndex] !== undefined && stops[stopIndex] !== undefined) {
        let left = stops.slice(0, startIndex);
        let right = stops.slice(stopIndex + 1);
        stops = left + right;
      }
      console.log(stops);
    } else if (command === "Switch") {
      let oldString = tokens[1];
      let newString = tokens[2];
      if (stops.includes(oldString)) {
        stops = stops.split(oldString).join(newString);
      }
      console.log(stops);
    }
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
