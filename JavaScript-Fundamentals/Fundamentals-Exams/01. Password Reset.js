function solve(input) {
  let pass = input.shift().split("");

  while (input[0] !== "Done") {
    let lines = input.shift().split(" ");
    let tempStr = "";

    if (lines[0] === "TakeOdd") {
      for (let i = 1; i < pass.length; i += 2) {
        tempStr += pass[i];
      }
      pass = tempStr;
      console.log(pass);
    } else if (lines[0] === "Cut") {
      let index = Number(lines[1]);
      let length = Number(lines[2]);
      let substring = pass.substring(index, index + length);
      pass = pass.replace(substring, "");
      console.log(pass);
    } else if (lines[0] === "Substitute") {
      let searchFor = lines[1];
      let replacement = lines[2];
      tempStr = pass;

      while (tempStr.includes(searchFor)) {
        tempStr = tempStr.replace(searchFor, replacement);
      }
      if (pass.includes(searchFor)) {
        console.log(pass);
      } else {
        console.log("Nothing to replace!");
      }
    }
  }
  console.log(`Your password is: ${pass}`);
}
solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
