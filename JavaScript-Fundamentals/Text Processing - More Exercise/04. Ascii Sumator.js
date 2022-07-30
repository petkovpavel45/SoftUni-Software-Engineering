function asciiSum(input) {
  let minAscii = Math.min(input[0].charCodeAt(0), input[1].charCodeAt(0));
  let maxAscii = Math.max(input[0].charCodeAt(0), input[1].charCodeAt(0));
  let word = input[2].split("");
  let sum = 0;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i].charCodeAt(0);

    if (ch > minAscii && ch < maxAscii) {
      sum += ch;
    }
  }
  console.log(sum);
}

asciiSum(["a", "1", "jfe392$#@j24ui9ne#@$"]);
