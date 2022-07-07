function meetings(input) {
  let result = {};

  for (let lines of input) {
    let [weekday, name] = lines.split(" ");
    if (result.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}!`);
    } else {
      result[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
    }
  }

  for (const key in result) {
    console.log(`${key} -> ${result[key]}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
