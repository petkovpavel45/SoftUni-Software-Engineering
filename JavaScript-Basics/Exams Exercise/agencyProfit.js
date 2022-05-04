function agencyProfit(input){

    let name = input[0];
    let adultTicket = Number(input[1]);
    let childTicket = Number(input[2]);
    let priceAdultTicket = Number(input[3]);
    let serviceFee = Number(input[4]);

    let priceChildTicket = priceAdultTicket - (priceAdultTicket * 0.7);
    let fullAdultPrice = priceAdultTicket + serviceFee;
    let fullChildPrice = priceChildTicket + serviceFee;
    let sumPrice = (childTicket * fullChildPrice) + (adultTicket * fullAdultPrice);
    let profit = sumPrice * 0.2;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`)
}
agencyProfit(["WizzAir", "15", "5", "120", "40"])