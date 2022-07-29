function solve(text) {
  let words = text.split(" ").filter((el) => el !== "");
  let totalSum = 0;
  const isUpperCase = (letter) => letter.toUpperCase() === letter;
  const getAlphabetPosition = (letter) => letter.charCodeAt(0) - 96;

  words.forEach((word) => {
    let letterBefore = word[0];
    let letterAfter = word[word.length - 1];
    let number = Number(word.substring(1, word.length - 1));
    let beforePostion = getAlphabetPosition(letterBefore.toLowerCase());
    let afterPostion = getAlphabetPosition(letterAfter.toLowerCase());

    if (isUpperCase(letterBefore)) {
      number /= beforePostion;
    } else {
      number *= beforePostion;
    }

    if (isUpperCase(letterAfter)) {
      number -= afterPostion;
    } else {
      number += afterPostion;
    }
    totalSum += number;
  });
  console.log(totalSum.toFixed(2));
}
solve("P34562Z q2576f   H456z");
