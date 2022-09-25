function solve(input) {
  let carsNum = Number(input.shift());
  let carsInfo = {};

  for (let index = 0; index < carsNum; index++) {
    let tokens = input.shift().split("|");
    let car = tokens[0];
    let mileage = Number(tokens[1]);
    let fuel = Number(tokens[2]);
    if (!carsInfo[car]) {
      carsInfo[car] = {
        mileage: 0,
        fuel: 0,
      };
    }
    carsInfo[car].mileage += mileage;
    carsInfo[car].fuel += fuel;
  }
  while (input[0] !== "Stop") {
    let tokens = input.shift().split(" : ");
    let command = tokens[0];
    let carName = tokens[1];
    if (command === "Drive") {
      let tempDistance = Number(tokens[2]);
      let tempFuel = Number(tokens[3]);
      if (carsInfo[carName].fuel >= tempFuel) {
        carsInfo[carName].mileage += tempDistance;
        carsInfo[carName].fuel -= tempFuel;
        console.log(
          `${carName} driven for ${tempDistance} kilometers. ${tempFuel} liters of fuel consumed.`
        );
      } else {
        console.log("Not enough fuel to make that ride");
      }
      if (carsInfo[carName].mileage >= 100000) {
        delete carsInfo[carName];
        console.log(`Time to sell the ${carName}!`);
      }
    } else if (command === "Refuel") {
      let tempFuel = Number(tokens[2]);
      let maxFuel = Math.min(75 - carsInfo[carName].fuel, tempFuel);
      carsInfo[carName].fuel += maxFuel;
      console.log(`${carName} refueled with ${maxFuel} liters`);
    } else if (command === "Revert") {
      let kilometers = Number(tokens[2]);
      carsInfo[carName].mileage -= kilometers;
      console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
      if (carsInfo[carName].mileage < 10000) {
        carsInfo[carName].mileage = 10000;
      }
    }
  }
  for (let car of Object.entries(carsInfo)) {
    console.log(
      `${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`
    );
  }
}

solve([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);

console.log("------");
solve([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
