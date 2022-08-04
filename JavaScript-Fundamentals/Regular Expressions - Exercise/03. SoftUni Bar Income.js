function softUniBarIncome(input) {
  let pattern =
    /%(?<customer>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>-?\d+(?:\.\d+)?)\$/g;
  let total = 0;

  while (input[0] !== "end of shift") {
    let lines = input.shift();
    let match = pattern.exec(lines);
    if (match !== null) {
      let customer = match.groups["customer"];
      let product = match.groups["product"];
      let count = Number(match.groups["count"]);
      let price = Number(match.groups["price"]);
      total += count * price;
      console.log(`${customer}: ${product} - ${(count * price).toFixed(2)}`);
    }
    match = pattern.exec(lines);
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);

console.log("-----");

softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
