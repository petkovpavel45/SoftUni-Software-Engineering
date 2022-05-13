function logistic(input) {
    let countGoods = Number(input[0]);
    let index = 1;
    let sumTonnage = 0;
    let bus = 0;
    let truck = 0;
    let train = 0;

    for(let i = 1; i <= countGoods; i++) {
        let tonnageGoods = Number(input[index]);
        index++;
        sumTonnage += tonnageGoods;
        if(tonnageGoods <= 3) {
            bus += tonnageGoods;
        }else if(tonnageGoods >= 4 && tonnageGoods <= 11){
            truck += tonnageGoods;
        }else {
            train += tonnageGoods;
        }
    }
    let avg = (bus * 200 + truck * 175 + train * 120) / sumTonnage;
    let busPr = bus / sumTonnage * 100;
    let truckPr = truck / sumTonnage * 100;
    let trainPr = train / sumTonnage * 100;

    console.log(avg.toFixed(2));
    console.log(`${busPr.toFixed(2)}%`);
    console.log(`${truckPr.toFixed(2)}%`);
    console.log(`${trainPr.toFixed(2)}%`);

}
logistic(["5", "2", "10", "20", "1", "7"])