function transportPrice(input) {
    let countKm = Number(input[0]);
    let dayAndNight = input[1];
    let price = 0;
    if (countKm < 20) {
        if(dayAndNight === "day") {
            price = 0.70 + countKm * 0.79;
            console.log(price.toFixed(2));
        }else if (dayAndNight === "night") {
            price = 0.70 + countKm * 0.90;
            console.log(price.toFixed(2));
        }
    }else if (countKm >= 20 && countKm < 100) {
        if(dayAndNight === "day" || dayAndNight === "night") {
            price = countKm * 0.09;
            console.log(price.toFixed(2));
        }  
    } else {
        if(dayAndNight === "day" || dayAndNight === "night") {
            price = countKm * 0.06;
            console.log(price.toFixed(2));
        }  
    }
}
transportPrice(["180", "night"])