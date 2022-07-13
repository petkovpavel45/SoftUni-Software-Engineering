function partyTime(input) {
  let vip = new Set();
  let regular = new Set();

  while (input[0] !== "PARTY") {
    let guest = input.shift();

    if (Number.isNaN(Number(guest[0]))) {
      regular.add(guest);
    } else {
      vip.add(guest);
    }
  }
  for (let guest of input) {
    vip.delete(guest);
    regular.delete(guest);
  }
  console.log(vip.size + regular.size);

  for (const guest of vip) {
    console.log(guest);
  }
  for (const guest of regular) {
    console.log(guest);
  }
}

partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
