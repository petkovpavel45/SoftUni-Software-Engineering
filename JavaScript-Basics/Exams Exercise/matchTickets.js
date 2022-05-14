function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let countPeople = Number(input[2]);
    let priceTransport = 0;
    let priceTicket = 0;
    switch(category) {
        case "Normal":
            priceTicket = countPeople * 249.99;
            if(countPeople >= 1 && countPeople <= 4) {
                priceTransport = budget * 0.25;
            }else if (countPeople >= 5 && countPeople <= 9) {
                priceTransport = budget * 0.40;
            }else if (countPeople >= 10 && countPeople <= 24) {
                priceTransport = budget * 0.50;
            }else if (countPeople >= 25 && countPeople <= 49) {
                priceTransport = budget * 0.60;
            }else {
                priceTransport = budget * 0.75;
            }
            break;
        case "VIP":
            priceTicket = countPeople * 499.99;
            if(countPeople >= 1 && countPeople <= 4) {
                priceTransport = budget * 0.25;
            }else if (countPeople >= 5 && countPeople <= 9) {
                priceTransport = budget * 0.40;
            }else if (countPeople >= 10 && countPeople <= 24) {
                priceTransport = budget * 0.50;
            }else if (countPeople >= 25 && countPeople <= 49) {
                priceTransport = budget * 0.60;
            }else {
                priceTransport = budget * 0.75;
            }
            break;
    }
    let leftMoney = Math.abs(priceTicket - priceTransport);
    if (budget <= leftMoney) {
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money! You need ${leftMoney.toFixed(2)} leva.`);
    }
}
matchTickets(["3000", "VIP", "49"])