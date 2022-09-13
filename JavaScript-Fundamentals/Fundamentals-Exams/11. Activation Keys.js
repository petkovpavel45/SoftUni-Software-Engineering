function solve(input) {
  let str = input.shift();

  while (input[0] !== "Generate") {
    let token = input.shift().split(">>>");
    let command = token[0];

    if (command === "Slice") {
      let startIndex = Number(token[1]);
      let endIndex = Number(token[2]);
      let before = str.slice(0, startIndex);
      let after = str.slice(endIndex);
      str = before + after;
      console.log(str);
    } else if (command === "Flip") {
      let startIndex = Number(token[2]);
      let endIndex = Number(token[3]);

      if (token[1] === "Upper") {
        let upper = str.slice(startIndex, endIndex).toUpperCase();
        str = str.replace(str.slice(startIndex, endIndex), upper);
        console.log(str);
      } else if (token[1] === "Lower") {
        let lower = str.slice(startIndex, endIndex).toLowerCase();
        str = str.replace(str.slice(startIndex, endIndex), lower);
        console.log(str);
      }
    } else if (command === "Contains") {
      let substring = token[1];
      if (str.includes(substring)) {
        console.log(`${str} contains ${substring}`);
      } else {
        console.log("Substring not found!");
      }
    }
  }
  console.log("Your activation key is:", str);
}

solve([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
