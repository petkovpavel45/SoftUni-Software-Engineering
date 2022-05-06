function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let typeCar = 0;
    let classCar = 0;

    if(budget <= 100) {
        classCar = "Economy class";

        switch(season){
            case "Summer":
                typeCar = "Cabrio";
                price = budget * 0.35;
                break;
            case "Winter":
                typeCar = "Jeep";
                price = budget * 0.65;
                break;
        }
    }else if(budget > 100 && budget <= 500){
        classCar = "Compact class";
        switch(season){
            case "Summer":
                typeCar = "Cabrio";
                price = budget * 0.45;
                break;
            case "Winter":
                typeCar = "Jeep";
                price = budget * 0.80;
                break;
        }
    }else {
        classCar = "Luxury class";
        if(season === "Summer" || season === "Winter"){
            typeCar = "Jeep";
            price = budget * 0.90;
        }
    }

    console.log(classCar);
    console.log(`${typeCar} - ${price.toFixed(2)}`);

}
carToGo(["99.99", "Summer"])