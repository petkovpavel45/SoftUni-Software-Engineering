function arrayManipulator(arr, commands) {
  for (let command of commands) {
    let tokens = command.split(" ");
    let currCommand = tokens[0];

    if (currCommand === "add") {
      let index = Number(tokens[1]);
      let element = Number(tokens[2]);
      arr.splice(index, 0, element);
    } else if (currCommand === "addMany") {
      let index = Number(tokens[1]);
      tokens.splice(0, 2);
      let tokensToAdd = tokens.map(Number);
      arr.splice(index, 0, ...tokensToAdd);
    } else if (currCommand === "contains") {
      let result = arr.indexOf(Number(tokens[1]));
      console.log(result);
    } else if (currCommand === "remove") {
      let indexRemove = Number(tokens[1]);
      arr.splice(indexRemove, 1);
    } else if (currCommand === "shift") {
      let positions = Number(tokens[1]);
      for (let i = 0; i < positions; i++) {
        let firstNum = arr.shift();
        arr.push(firstNum);
      }
    } else if (currCommand === "sumPairs") {
      let resArray = [];
      if (arr.length % 2 !== 0) {
        arr.push(0);
      }
      for (let index = 0; index < arr.length - 1; index += 2) {
        let result = arr[index] + arr[index + 1];
        resArray.push(result);
      }
      arr = resArray;
    } else if (currCommand === "print") {
      console.log(`[ ${arr.join(", ")} ]`);
    }
  }
}

arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
