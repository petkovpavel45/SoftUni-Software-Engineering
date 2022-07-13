function companyUsers(input) {
  let companies = {};

  for (let lines of input) {
    let company = lines.split(" -> ")[0];
    let id = lines.split(" -> ")[1];
    if (!companies.hasOwnProperty(company)) {
      companies[company] = [];
    }
    if (!companies[company].includes(id)) {
      companies[company].push(id);
    }
  }
  let sorted = Object.entries(companies).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let el of sorted) {
    console.log(el[0]);
    if (el[1].length > 1) {
      console.log(`-- ${el[1].join("\n-- ")}`);
    } else {
      console.log(`-- ${el[1].join("")}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
