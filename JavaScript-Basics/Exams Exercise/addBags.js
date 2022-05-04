function addBags (input){

    let priceBagg20Kg = Number(input[0]);
    let baggKg = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let baggsCount = Number(input[3]);
    let baggPrice = 0;
    let totalBaggsPrice = 0;

    if (baggKg < 10) {
        baggPrice = priceBagg20Kg * 0.2;
        if (daysToTrip > 30) {
            baggPrice = baggPrice * 1.1;
            totalBaggsPrice = baggPrice * baggsCount;
        }else if (daysToTrip >= 7 && daysToTrip <= 30) {
            baggPrice = baggPrice * 1.15;
            totalBaggsPrice = baggPrice * baggsCount;
        }else if (daysToTrip < 7){
            baggPrice = baggPrice * 1.4;
            totalBaggsPrice = baggPrice * baggsCount;
        }
    } else if (baggKg >= 10 && baggKg <= 20){
        baggPrice = priceBagg20Kg * 0.5;
        if (daysToTrip > 30) {
            baggPrice = baggPrice * 1.1;
            totalBaggsPrice = baggPrice * baggsCount;
        }else if (daysToTrip >= 7 && daysToTrip <= 30) {
            baggPrice = baggPrice * 1.15;
            totalBaggsPrice = baggPrice * baggsCount;
        }else{
            baggPrice = baggPrice * 1.4;
            totalBaggsPrice = baggPrice * baggsCount;
        }
    } else {
        baggPrice = priceBagg20Kg;
        if (daysToTrip > 30) {
            baggPrice = baggPrice * 1.1;
            totalBaggsPrice = baggPrice * baggsCount;
        }else if (daysToTrip >= 7 && daysToTrip <= 30) {
            baggPrice = baggPrice * 1.15;
            totalBaggsPrice = baggPrice * baggsCount;
        }else {
            baggPrice = baggPrice * 1.4;
            totalBaggsPrice = baggPrice * baggsCount;
        }
    }
    console.log(`The total price of bags is: ${totalBaggsPrice.toFixed(2)} lv.`);
    
}
addBags(["25.50", "5", "36", "6"])