function harvest(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let countWorkers = Number(input[3]);

    let totalGrape = x * y;
    let wine = totalGrape * 0.4 / 2.5;
    let diff = Math.abs(wine - z);
    let wineForWorkers = diff / countWorkers;
    if ( wine < z) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log((`${Math.ceil(diff)} liters left -> ${Math.ceil(wineForWorkers)} liters per person.`));
    }
}
harvest(["650", "2", "175", "3"])