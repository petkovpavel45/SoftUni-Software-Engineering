function oddOccurrences(input) {
  let words = input.split(" ");
  let result = {};

  for (let word of words) {
    word = word.toLocaleLowerCase();

    if (result.hasOwnProperty(word)) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  let filtered = Object.entries(result).filter(([key, value]) => {
    if (value % 2 === 1) {
      return true;
    } else {
      return false;
    }
  });

  console.log(filtered.map((entry) => entry[0]).join(" "));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
