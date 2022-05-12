function fuelTankPart2(input) {
    let type = input[0];
    let amountFuel = Number(input[1]);
    let cardDiscount = input[2];
    let price = 0
    switch (type) {
        case "Gas":
            price = amountFuel * 0.93;

            if (cardDiscount === "Yes") {
                price = amountFuel * (0.93 - 0.08);
            }
            if (amountFuel >= 20 && amountFuel <= 25) {
                price *= 0.92;
            } else {
                price *= 0.90;
            }
            break;
        case "Gasoline":
            price = amountFuel * 2.22;
            if (cardDiscount === "Yes") {
                price = amountFuel * (2.22 - 0.18);
            }
            if (amountFuel >= 20 && amountFuel <= 25) {
                price *= 0.92;
            } else {
                price *= 0.90;
            }

            break;
        case "Diesel":
            price = amountFuel * 2.33;
            if (cardDiscount === "Yes") {
                price = amountFuel * (2.33 - 0.12);
            }
            if (amountFuel >= 20 && amountFuel <= 25) {
                price *= 0.92;
            } else if (amountFuel > 25){
                price *= 0.90;
            }
            break;
    }
    console.log(`${price.toFixed(2)} lv.`);

}
fuelTankPart2(["Diesel", "19", "No"])