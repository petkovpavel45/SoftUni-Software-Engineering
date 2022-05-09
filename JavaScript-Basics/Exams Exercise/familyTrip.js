function familyTrip (input){
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let priceOneNight = Number(input[2]);
    let extraPays = Number(input[3]);

    let priceForAllNights = nights * priceOneNight;
    if (nights > 7){
        priceOneNight = priceOneNight - (priceOneNight * 0.05);
        priceForAllNights = priceOneNight * nights;
    }
    let totalPrice = priceForAllNights + (budget * (extraPays / 100));
    let leftMoney = Math.abs(budget - totalPrice);
    if (totalPrice > budget){
        console.log(`${leftMoney.toFixed(2)} leva needed.`)
    }else{
        console.log (`Ivanovi will be left with ${leftMoney.toFixed(2)} leva after vacation.`)
    }

}
familyTrip(["800.50", "8", "100", "2"])