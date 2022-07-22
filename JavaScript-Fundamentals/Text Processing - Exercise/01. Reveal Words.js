function revealWords(words, str) {
  let splitedWords = words.split(", ");

  for (let word of splitedWords) {
    let temp = "*".repeat(word.length);
    str = str.replace(temp, word);
  }
  console.log(str);
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
console.log("---");

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
