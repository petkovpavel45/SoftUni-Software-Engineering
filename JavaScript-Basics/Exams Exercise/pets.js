function pets(input) {
    let days = Number(input[0]);
    let leftFoodKg = Number(input[1]);
    let dogFoodKgPerDay = Number(input[2]);
    let catFoodKgPerDay = Number(input[3]);
    let turtleFoodGramPerDay = Number(input[4]);

    let dogFood = days * dogFoodKgPerDay;
    let catFood = days * catFoodKgPerDay;
    let turtleFood = days * (turtleFoodGramPerDay / 1000);
    let totalFood = dogFood + catFood + turtleFood;
    let diff = Math.abs(totalFood - leftFoodKg);

    if(totalFood <= leftFoodKg) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}
pets(["5", "10", "2.1", "0.8", "321"])