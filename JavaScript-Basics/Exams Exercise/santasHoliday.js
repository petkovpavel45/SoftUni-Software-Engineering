function santasHoliday(input) {

    let days = Number(input[0]);
    let type = input[1];
    let grade = input[2];
    let price = 0;


    let daysIntoNights = days - 1;
    switch (type) {
        case "room for one person":
            price = daysIntoNights * 18.00;
            break;
        case "apartment":
            price = daysIntoNights * 25.00;
            if (days < 10) {
                price = price * 0.70;
            } else if (days >= 10 && days <= 15) {
                price = price * 0.65;
            } else {
                price = price * 0.50;
            }
            break;
        case "president apartment":
            price = daysIntoNights * 35.00;
            if (days < 10) {
                price = price * 0.90;
            } else if (days >= 10 && days <= 15) {
                price = price * 0.85;
            } else {
                price = price * 0.80;
            }
            break;
    }
    if (grade === "positive") {
        price = price + (price * 0.25);
    } else if (grade === "negative") {
        price = price - (price * 0.10);
    }
    console.log(price.toFixed(2));
}
santasHoliday(["30", "president apartment", "negative"])