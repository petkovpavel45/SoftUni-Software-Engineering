function cleverLily(input) {
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toy = 0;
    let moneyGet = 10;
    let money = 0;

    for(let i = 1; i <= age; i++){
        if(i % 2 === 0) {
            money += moneyGet;
            moneyGet += 10;
            money -= 1;
        }else {
            toy++;
        }
    }
    let totalMoney = toy * toyPrice + money;
    let diff = Math.abs(priceWashingMachine - totalMoney);

    if(totalMoney >= priceWashingMachine) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily (["10", "170.00", "6"])