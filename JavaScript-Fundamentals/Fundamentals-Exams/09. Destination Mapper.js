function destinationMapper(text) {
  let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
  let match = pattern.exec(text);
  let travelPoints = 0;
  let res = [];
  while (match !== null) {
    let city = match[2];
    travelPoints += city.length;
    res.push(city);
    match = pattern.exec(text);
  }
  console.log(`Destinations: ${res.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper(["=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="]);
