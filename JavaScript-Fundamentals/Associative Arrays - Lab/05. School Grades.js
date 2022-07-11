function schoolGrades(input) {
  let info = new Map();
  for (let lines of input) {
    let tokens = lines.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(Number);
    if (!info.has(name)) {
      info.set(name, []);
    }
    let existing = info.get(name);
    for (let grade of grades) {
      existing.push(grade);
    }
  }
  let sorted = Array.from(info);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, grades] of sorted) {
    let avg = 0;
    for (let grade of grades) {
      avg += grade;
    }
    avg /= grades.length;

    console.log(`${name}: ${avg.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
