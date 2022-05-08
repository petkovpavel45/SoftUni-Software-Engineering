function excursionSale(input) {
    let seaOffers = Number(input[0]);
    let mountOffers = Number(input[1]);
    let index = 2;
    let command = input[index];
    index++;
    let profit = 0
    let boolSea = true;
    let boolMount = true;
    while (command !== "Stop") {
        if (command === "sea" && boolSea) {
            seaOffers--;
            profit += 680;
            if (seaOffers <= 0) {
                boolSea = false;
            }
        }
        if (command === "mountain" && boolMount) {
            mountOffers--;
            profit += 499;
            if (mountOffers <= 0) {
                boolMount = false;
            }
        }
        if (!boolMount && !boolSea) {
            break;
        }
        command = input[index];
        index++;
    }
    if (!boolMount && !boolSea) {
        console.log(`Good job! Everything is sold.`)
        console.log(`Profit: ${profit} leva.`)
    } else {
        console.log(`Profit: ${profit} leva.`)
    }
}
excursionSale(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"
])