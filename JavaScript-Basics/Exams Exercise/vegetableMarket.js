function vegetableMarket (input){

    let priceVegOneKg = Number(input[0]);
    let priceFruitsOneKg = Number(input[1]);
    let totalKgVeg = Number(input[2]);
    let totalKgFruits = Number(input[3]);

    let fullPrice = (priceVegOneKg * totalKgVeg) + (priceFruitsOneKg * totalKgFruits);
    let priceInEuro = fullPrice / 1.94;
    console.log(priceInEuro.toFixed(2));
}
vegetableMarket(["0.194", "19.4", "10", "10"])