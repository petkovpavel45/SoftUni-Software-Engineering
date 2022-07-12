  function wordTracker(input) {
    let result = {};
    let sentence = input.shift().split(" ");

    for (let word of sentence) {
      result[word] = 0;
    }

    for (let word of input) {
      if (result.hasOwnProperty(word)) {
        result[word]++;
      }
    }

    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    for (let keys of sorted) {
      console.log(`${keys[0]} - ${keys[1]}`);
    }
  }

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
