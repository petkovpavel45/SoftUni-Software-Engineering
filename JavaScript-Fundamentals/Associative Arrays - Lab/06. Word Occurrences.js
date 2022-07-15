function wordOccurrences(input) {
  let wordOcc = new Map();
  for (let words of input) {
    if (wordOcc.has(words)) {
      let sum = wordOcc.get(words) + 1;
      wordOcc.set(words, sum);
    } else {
      wordOcc.set(words, 1);
    }
  }

  let sorted = Array.from(wordOcc);
  sorted.sort((a, b) => b[1] - a[1]);
  for (let key of sorted) {
    console.log(`${key[0]} -> ${key[1]} times`);
  }
}

wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
