function foodDelivery (input){

    let countChickenMenu = Number(input[0]);
    let countFishMenu = Number(input[1]);
    let countVegeterianMenu = Number(input[2]);

    let priceChickenMenu = countChickenMenu * 10.35;
    let priceFishMenu = countFishMenu * 12.4;
    let priceVegeterianMenu = countVegeterianMenu * 8.15;
    let priceWholeMenu = priceChickenMenu + priceFishMenu + priceVegeterianMenu;
    let priceDesert = (20 / 100) * priceWholeMenu;
    let priceDelivery = 2.5;
    let totalPrice = priceWholeMenu + priceDesert + priceDelivery;

    console.log(totalPrice)

}
foodDelivery(["2", "4", "3"])