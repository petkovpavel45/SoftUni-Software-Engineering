function adressBook(input) {
  let adressBook = {};

  for (let lines of input) {
    let [name, adress] = lines.split(":");
    adressBook[name] = adress;
  }

  let sorted = Object.entries(adressBook);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (const iterator of sorted) {
    console.log(`${iterator[0]} -> ${iterator[1]}`);
  }
}

adressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
