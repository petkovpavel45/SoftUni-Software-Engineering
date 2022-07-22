function countString(text, word) {
  let count = 0;
  let arr = text.split(" ");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log(count);
}

countString(
  "softuni is great place for learning new programming languages",
  "softuni"
);
