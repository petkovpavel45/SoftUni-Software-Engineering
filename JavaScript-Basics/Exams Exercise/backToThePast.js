function backToThePast(input) {
    let inheritMoney = Number(input[0]);
    let yearToLive = Number(input[1]);
    let startYear = 1800;
    let yearsOld = 18;

    for(let i = startYear; i <= yearToLive; i++) {

        if(i % 2 === 0) {
            inheritMoney -= 12000;
        } else {
            inheritMoney -= 12000 + (50 * yearsOld);
        }
        yearsOld++;
    }
    if(inheritMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritMoney.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(inheritMoney).toFixed(2)} dollars to survive.`);
    }
}
backToThePast(["50000", "1802"])