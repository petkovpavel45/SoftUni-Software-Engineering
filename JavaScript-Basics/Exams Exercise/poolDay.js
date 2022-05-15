function poolDay(input){
    let people = Number(input[0]);
    let entry = Number(input[1]);
    let oneSunbed = Number(input[2]);
    let oneUmbrella = Number(input[3]);

    let allEntries = people * entry;
    let peopleWantSunbed = Math.ceil(people * 0.75);
    let priceSunbeds = peopleWantSunbed * oneSunbed;
    let countUmbrella = Math.ceil(people * 0.5);
    let priceUmbrellas = countUmbrella * oneUmbrella;
    let totalPrice = allEntries + priceSunbeds + priceUmbrellas;

    console.log(`${totalPrice.toFixed(2)} lv.`);
}
poolDay(["21", 
"5.50", 
"4.40", 
"6.20"])