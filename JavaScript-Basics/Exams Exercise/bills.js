function bills(input) {
    let months = Number(input[0]);
    let index = 1;
    let sumElectricity = 0;

    for(let i = 1; i <= months; i++){
        let priceElectricity = Number(input[index]);
        index++;

        sumElectricity += priceElectricity;
    }
    let water = 20 * months;
    let internet = 15 * months;
    let sum = sumElectricity + water + internet;
    let others = (sum * 0.2) + sum;
    let avg = (sum + others) / months;

    console.log(`Electricity: ${sumElectricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${avg.toFixed(2)} lv`);
}
bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"])