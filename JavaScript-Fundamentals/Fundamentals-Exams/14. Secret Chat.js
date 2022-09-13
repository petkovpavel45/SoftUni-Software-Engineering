function solve(input) {
  let msg = input.shift();

  while (input[0] !== "Reveal") {
    let tokens = input.shift().split(":|:");
    let command = tokens[0];
    let p1 = tokens[1];
    let p2 = tokens[2];

    if (command === "InsertSpace") {
      let index = Number(p1);
      let left = msg.slice(0, index);
      let right = msg.slice(index);
      msg = left + " " + right;
      console.log(msg);
    } else if (command === "Reverse") {
      let index = msg.indexOf(p1);
      if (index !== -1) {
        let left = msg.slice(0, index);
        let right = msg.slice(index + p1.length);
        msg = left + right + p1.split("").reverse().join("");
        console.log(msg);
      } else {
        console.log("error");
      }
    } else if (command === "ChangeAll") {
      msg = msg.split(p1).join(p2);
      console.log(msg);
    }
  }
  console.log(`You have a new text message: ${msg}`);
}

solve([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
