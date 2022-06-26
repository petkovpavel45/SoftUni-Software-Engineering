function convertToJson(firstName, lastName, hairColor) {
  let person = {};
  person.name = firstName;
  person.lastName = lastName;
  person.hairColor = hairColor;

  let converted = JSON.stringify(person);
  console.log(converted);
}

convertToJson("George", "Jones", "Brown");
