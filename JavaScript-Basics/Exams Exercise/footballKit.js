function footballKit(input) {
    let priceTShirt = Number(input[0]);
    let target = Number(input[1]);

    let priceShorties = priceTShirt * 0.75;
    let priceSocks = priceShorties * 0.20;
    let priceShoes = (priceTShirt + priceShorties) * 2;
    let sumPrice = priceShorties + priceSocks + priceTShirt + priceShoes;
    let totalSum = sumPrice * 0.85;
    let diff = Math.abs(totalSum - target);

    if(totalSum >= target) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalSum.toFixed(2)} lv.`);
    }else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
}
footballKit(["25", "100"])