function toyShop(input) {

    let holidayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddybearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let money = puzzleCount * 2.60 + dollCount * 3 + teddybearsCount * 4.10 + minionsCount * 8.20 + truckCount * 2;
    let toysCount = puzzleCount + dollCount + teddybearsCount + minionsCount + truckCount;

    if(toysCount >= 50){
        money = money * 0.75;
    }
    money = money * 0.90;
    let diff = Math.abs(money - holidayPrice);
    if(money >= holidayPrice){
       console.log(`Yes! ${diff.toFixed(2)} lv left.`) 
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"])