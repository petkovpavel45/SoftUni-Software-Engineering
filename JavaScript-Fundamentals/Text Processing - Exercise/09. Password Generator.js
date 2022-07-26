function passwordGenerator(input) {
  let concatWords = input[0] + input[1];
  let word = input[2].toUpperCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let res = "";
  let indexVowel = 0;

  for (let index = 0; index < concatWords.length; index++) {
    if (vowels.includes(concatWords[index])) {
      let indexOfChar = indexVowel % word.length;
      indexVowel++;
      let curChar = word[indexOfChar];
      res += curChar;
    } else {
      res += concatWords[index];
    }
  }
  console.log(`Your generated password is ${res.split("").reverse().join("")}`);
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
