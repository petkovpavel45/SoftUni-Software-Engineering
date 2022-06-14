function charactersInRange(firstChar, lastChar) {
  let start = Math.min(firstChar.charCodeAt(0), lastChar.charCodeAt(0));
  let end = Math.max(firstChar.charCodeAt(0), lastChar.charCodeAt(0));
  let array = [];

  for (let index = start + 1; index < end; index++) {
    array.push(String.fromCharCode(index));
  }
  console.log(array.join(" "));
}
charactersInRange("C", "#");
