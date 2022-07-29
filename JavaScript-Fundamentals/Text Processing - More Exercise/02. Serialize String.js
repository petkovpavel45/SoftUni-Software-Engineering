function serializeString(input) {
  let splitted = input[0].split("");
  let letters = {};

  for (let i = 0; i < splitted.length; i++) {
    if (!letters[splitted[i]]) {
      letters[splitted[i]] = [];
      letters[splitted[i]].push(i);
    } else {
      letters[splitted[i]].push(i);
    }
  }

  let entriesOfLetters = Object.entries(letters);

  for (let char of entriesOfLetters) {
    console.log(`${char[0]}:${char[1].join("/")}`);
  }
}

serializeString(["abababa"]);
