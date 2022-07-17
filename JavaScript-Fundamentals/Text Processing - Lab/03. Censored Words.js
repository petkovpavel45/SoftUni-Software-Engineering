function censoredWords(text, word) {
  console.log(text.split(word).join(`*`.repeat(word.length)));
}

censoredWords("A small sentence with some smalllenght words", "small");
