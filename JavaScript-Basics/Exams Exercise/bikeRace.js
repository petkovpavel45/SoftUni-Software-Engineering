function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let trace = input[2];
    let totalCount = juniors + seniors;
    let sum = 0;
    let totalSum = 0;
    switch (trace) {
        case "trail":
            sum = (juniors * 5.50) + (seniors * 7);
            totalSum = sum * 0.95;
            break;
        case "cross-country":
            sum = (juniors * 8) + (seniors * 9.50);
            totalSum = sum * 0.95;
            if (totalCount >= 50) {
                totalSum = sum * 0.75 * 0.95;
            }
            break;
        case "downhill":
            sum = (juniors * 12.25) + (seniors * 13.75);
            totalSum = sum * 0.95;
            break;
        case "road":
            sum = (juniors * 20) + (seniors * 21.50);
            totalSum = sum * 0.95;
            break;
    }
    console.log(totalSum.toFixed(2));
}
bikeRace(["30", "25", "cross-country"])