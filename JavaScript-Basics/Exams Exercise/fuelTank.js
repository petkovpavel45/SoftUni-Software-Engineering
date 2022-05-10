function fuelTank(input) {
    let type = input[0];
    let fuel = Number(input[1]);

    switch (type) {
        case "Diesel":
            if(fuel >= 25) {
                console.log(`You have enough diesel.`);
            }else {
                console.log(`Fill your tank with diesel!`);
            }
            break;
        case "Gasoline":
            if(fuel >= 25) {
                console.log(`You have enough gasoline.`);
            }else {
                console.log(`Fill your tank with gasoline!`);
            }
            break;
        case "Gas":
            if(fuel >= 25) {
                console.log(`You have enough gas.`);
            }else {
                console.log(`Fill your tank with gas!`);
            }
            break;
        default: console.log(`Invalid fuel!`);break;
    }
}
fuelTank(["Gasoline", "40"])