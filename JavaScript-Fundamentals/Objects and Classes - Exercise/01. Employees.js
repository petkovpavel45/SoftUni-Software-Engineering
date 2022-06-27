function employees(input) {
  let obj = {};
  for (let person of input) {
    obj[person] = person.length;
  }
  for (const key in obj) {
    console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
