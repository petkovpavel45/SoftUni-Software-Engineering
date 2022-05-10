function flowers(input) {
    let hrizantemi = Number(input[0]);
    let rozi = Number(input[1]);
    let laleta = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let totalCount = hrizantemi + rozi + laleta;
    let priceForFlowers = 0;

    switch(season) {
        case "Spring":
            priceForFlowers = hrizantemi * 2 + rozi * 4.10 + laleta * 2.50;
            if(holiday === "Y") {
                priceForFlowers = priceForFlowers + (priceForFlowers * 0.15);
            }
            if(laleta > 7) {
                priceForFlowers *= 0.95;
            }
            if (totalCount > 20) {
                priceForFlowers *= 0.80;
            }
            break;
        case "Summer":
            priceForFlowers = hrizantemi * 2 + rozi * 4.10 + laleta * 2.50;
            if(holiday === "Y") {
                priceForFlowers = priceForFlowers + (priceForFlowers * 0.15);
            }
            if (totalCount > 20) {
                priceForFlowers *= 0.80;
            }
            break;
        case "Autumn":
            priceForFlowers = hrizantemi * 3.75 + rozi * 4.50 + laleta * 4.15;
            if(holiday === "Y") {
                priceForFlowers = priceForFlowers + (priceForFlowers * 0.15);
            }
            if (totalCount > 20) {
                priceForFlowers *= 0.80;
            }
            break;
        case "Winter":
            priceForFlowers = hrizantemi * 3.75 + rozi * 4.50 + laleta * 4.15;
            if(holiday === "Y") {
                priceForFlowers = priceForFlowers + (priceForFlowers * 0.15);
            }
            if (rozi >= 10) {
                priceForFlowers *= 0.90;
            }
            if (totalCount > 20) {
                priceForFlowers *= 0.80;
            }
            break;
    }
    let totalPrice = priceForFlowers + 2;
    console.log(totalPrice.toFixed(2));

}
flowers(["10", "10", "10", "Autumn", "N"])