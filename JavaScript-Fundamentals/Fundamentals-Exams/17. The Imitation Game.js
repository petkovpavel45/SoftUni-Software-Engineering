function solve(input) {
  let msg = input.shift();

  while (input[0] !== "Decode") {
    let tokens = input.shift().split("|");
    let command = tokens[0];

    if (command === "ChangeAll") {
      let substring = tokens[1];
      let replacement = tokens[2];
      msg = msg.split(substring).join(replacement);
    } else if (command === "Insert") {
      let index = Number(tokens[1]);
      let value = tokens[2];
      let before = msg.slice(0, index);
      let after = msg.slice(index);
      msg = before + value + after;
    } else if (command === "Move") {
      let n = Number(tokens[1]);
      let msgSplit = msg.split("");
      for (let index = 0; index < n; index++) {
        let ch = msgSplit.shift();
        msgSplit.push(ch);
      }
      msg = msgSplit.join("");
    }
  }
  console.log(`The decrypted message is: ${msg}`);
}

solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

solve(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
