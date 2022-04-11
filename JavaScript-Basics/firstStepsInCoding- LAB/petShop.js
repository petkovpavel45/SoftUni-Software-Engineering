function petShop(input){

    let dogFoodPackagesCount = Number(input[0]);
    let catFoodPackagesCount = Number(input[1]);

    let totalPriceDogFood = dogFoodPackagesCount * 2.50;
    let totalPriceCatFood = catFoodPackagesCount * 4.00;

    let totalPrice = totalPriceDogFood + totalPriceCatFood;
    console.log(`${totalPrice} lv.`);
}
petShop(["5", "4"])