function piccolo(input) {
  let parking = new Set();

  for (let lines of input) {
    let command = lines.split(", ")[0];
    let carNumber = lines.split(", ")[1];

    if (command === "IN") {
      parking.add(carNumber);
    } else {
      parking.delete(carNumber);
    }
  }

  if (parking.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    let sorted = Array.from(parking).sort();
    for (const iterator of sorted) {
        console.log(iterator);
    }
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
