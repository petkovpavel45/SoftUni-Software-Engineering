function valueOfAString(input) {
  let text = input[0].split("");

  let command = input[1];
  let filterUpperLetters = text.filter((ch) => {
    if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
      return true;
    } else {
      return false;
    }
  });
  let filterLowerLetters = text.filter((ch) => {
    if (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) {
      return true;
    } else {
      return false;
    }
  });
  let sum = 0;
  if (command === "LOWERCASE") {
    for (let i = 0; i < filterLowerLetters.length; i++) {
      let chCode = filterLowerLetters[i].charCodeAt(0);
      sum += chCode;
    }
  } else if (command === "UPPERCASE") {
    for (let i = 0; i < filterUpperLetters.length; i++) {
      let chCode = filterUpperLetters[i].charCodeAt(0);
      sum += chCode;
    }
  }
  console.log(`The total sum is: ${sum}`);
}

valueOfAString(["AC/DC", "UPPERCASE"]);
