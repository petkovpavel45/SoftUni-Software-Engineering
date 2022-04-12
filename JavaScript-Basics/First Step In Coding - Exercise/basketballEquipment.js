function basketballEquipment(input){
    let anualAbonamentTraining = Number(input[0]);
    let priceBasketballSneakers = anualAbonamentTraining - (40 / 100 * anualAbonamentTraining);
    let priceBasketballUniform = priceBasketballSneakers - (20 / 100 * priceBasketballSneakers);
    let aBasketball = priceBasketballUniform / 4;
    let accessories = aBasketball / 5;
    let totalPrice = anualAbonamentTraining + priceBasketballSneakers + priceBasketballUniform + aBasketball + accessories;

    console.log(totalPrice)
    
}
basketballEquipment(["365"])