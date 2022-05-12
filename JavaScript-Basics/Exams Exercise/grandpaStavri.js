function grandpaStavri(input) {
    let days = Number(input[0]);
    let index = 1;
    let totalQuantity = 0
    let totalDegrees = 0
    for (let i = 0; i < days; i++) {
        let quantity = Number(input[index]);
        index++;
        let degrees = Number(input[index]);
        index++;
        totalQuantity += quantity
        tempDeg = degrees * quantity
        totalDegrees += tempDeg
    }
    console.log(`Liter: ${totalQuantity.toFixed(2)}`)
    let finalDeg = totalDegrees / totalQuantity
    console.log(`Degrees: ${finalDeg.toFixed(2)}`)
    if (finalDeg < 38) {
        console.log(`Not good, you should baking!`)
    } else if (finalDeg >= 38 && finalDeg <= 42) {
        console.log(`Super!`)
    } else {
        console.log(`Dilution with distilled water!`)
    }
}
grandpaStavri(["3", "100", "45", "50", "55", "150", "36"])