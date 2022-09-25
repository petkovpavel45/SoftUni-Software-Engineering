function solve(input) {
  let pattern =
    /(\#|\|)(?<itemName>[A-Za-z ]+)\1(?<expDate>(?:\d{2})\/(?:\d{2})\/(?:\d{2}))\1(?<calories>([0-9][0-9]{0,3}|10000))\1/g;
  let str = input[0];

  let match = pattern.exec(str);
  let totalCalories = 0;
  let foodInfo = [];

  while (match !== null) {
    let itemName = match.groups["itemName"];
    let expDate = match.groups["expDate"];
    let nutrition = Number(match.groups["calories"]);
    totalCalories += nutrition;
    foodInfo.push({
      itemName,
      expDate,
      nutrition,
    });
    match = pattern.exec(str);
  }

  console.log(
    `You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`
  );
  for (let item of foodInfo) {
    console.log(
      `Item: ${item.itemName}, Best before: ${item.expDate}, Nutrition: ${item.nutrition}`
    );
  }
}
solve([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
console.log("---------------");
solve([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
