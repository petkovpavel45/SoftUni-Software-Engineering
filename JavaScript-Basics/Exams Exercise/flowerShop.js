function flowerShop(input) {
    let magnolii = Number(input[0]);
    let zumbili = Number(input[1]);
    let roses = Number(input[2]);
    let cactus = Number(input[3]);
    let pricePresent = Number(input[4]);

    let price = (magnolii * 3.25) + (zumbili * 4) + (roses * 3.5) + (cactus * 8);
    let priceWithFees = price * 0.05;
    let totalPrice = price - priceWithFees;
    let diff = Math.abs(totalPrice - pricePresent);

    if (totalPrice >= pricePresent) {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }

}
flowerShop(["2", "3", "5", "1", "50"])