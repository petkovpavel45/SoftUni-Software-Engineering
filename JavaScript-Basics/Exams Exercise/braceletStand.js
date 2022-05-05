function braceletStand(input){
    let pocketMoneyOneDay = Number(input[0]);
    let dailyEarn = Number(input[1]);
    let wholePeriodCost = Number(input[2]);
    let giftPrice = Number(input[3]);

    let savedMoneyFromPocketMoney = pocketMoneyOneDay * 5;
    let earns = dailyEarn * 5;
    let savedMoney = earns + savedMoneyFromPocketMoney;
    let profit = savedMoney - wholePeriodCost;
    
    if (profit >= giftPrice){
        console.log(`Profit: ${profit.toFixed(2)} BGN, the gift has been purchased.`);
    }
    else{
        let dif = giftPrice - profit;
        console.log(`Insufficient money: ${dif.toFixed(2)} BGN.`)
    }

}
braceletStand(["5.12", 
"32.05", 
"15", 
"150"])