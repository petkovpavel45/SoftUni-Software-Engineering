function solve(input) {
  let text = input[0];
  let digitsPattern = /\d/g;
  let wordsPattern = /(\:\:|\*\*)(?<word>[A-Z][a-z]{2,})\1/g;
  let threshold = 1;
  let digits = text.match(digitsPattern);
  digits.map((d) => (threshold *= Number(d)));
  console.log(`Cool threshold: ${threshold}`);
  let emojis = {};
  let wordMatch = wordsPattern.exec(text);
  while (wordMatch !== null) {
    let words = wordMatch.groups["word"];
    let fullName = wordMatch[0];
    emojis[fullName] = 0;
    for (let word of words) {
      emojis[fullName] += word.charCodeAt(0);
    }
    wordMatch = wordsPattern.exec(text);
  }
  
  console.log(`${Object.keys(emojis).length} emojis found in the text. The cool ones are:`);
  for (let emoji of Object.entries(emojis)) {
      if(emoji[1] >= threshold) {
          console.log(emoji[0]);
      }
  }
}

solve([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
