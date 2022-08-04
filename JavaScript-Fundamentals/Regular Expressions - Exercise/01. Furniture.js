function furniture(input) {
  let pattern =
    />>(?<furniture>[A-Z][\w]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)\b/g;
  let totalCost = 0;

  let match = pattern.exec(input);
  console.log("Bought furniture:");
  while (match !== null) {
    let price = Number(match.groups["price"]);
    let furniture = match.groups["furniture"];
    let quantity = Number(match.groups["quantity"]);
    let temPrice = price * quantity;
    totalCost += temPrice;
    console.log(furniture);
    match = pattern.exec(input);
  }
  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

furniture([
  ">>>Laptop<<312.2323!3",
  ">>>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
