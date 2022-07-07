function phoneBook(input) {
  let phoneBook = {};

  for (let lines of input) {
    let [name, number] = lines.split(" ");
    phoneBook[name] = number;
  }

  for (let key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
