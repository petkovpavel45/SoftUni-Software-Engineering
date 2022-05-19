function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let location = 0;
    let type = 0;
    let price = 0;

    if (budget <= 1000) {
        type = "Camp";
        switch (season) {
            case "Summer":
                location = "Alaska";
                price = budget * 0.65;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.45;
                break;
        }
    } else if (budget > 1000 && budget <= 3000) {
        type = "Hut";
        switch (season) {
            case "Summer":
                location = "Alaska";
                price = budget * 0.80;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.60;
                break;
        }
    } else {
        type = "Hotel";
        if (season === "Summer") {
            location = "Alaska";
            price = budget * 0.90;
        } else if (season === "Winter") {
            location = "Morocco";
            price = budget * 0.90;
        }
    }
    console.log(`${location} - ${type} - ${price.toFixed(2)}`);
}
vacation(["800", "Summer"])