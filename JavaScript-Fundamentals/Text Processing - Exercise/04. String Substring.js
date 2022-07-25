function stringSubstring(word, text) {
  let lowerCaseText = text.toLowerCase().split(" ");
  let isFound = false;
  for (let i = 0; i < lowerCaseText.length; i++) {
    let words = lowerCaseText[i];
    if (word === words) {
      console.log(word);
      isFound = true;
      break;
    }
  }
  if (!isFound) {
    console.log(`${word} not found!`);
  }
}

stringSubstring("python", "JavaScript is the best programming language");
