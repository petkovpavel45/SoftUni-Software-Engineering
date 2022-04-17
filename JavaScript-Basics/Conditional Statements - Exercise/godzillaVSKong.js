function godzillaVSKong(input){
    let budget = Number(input[0]);
    let statist = Number(input[1]);
    let priceClothingOneStatist = Number(input[2]);

    let decor = budget * 0.10;
    let priceCloth = statist * priceClothingOneStatist;
    if(statist > 150){
        priceCloth = priceCloth * 0.90;
    }
    let totalPrice = decor + priceCloth;
    let diff = Math.abs(budget - totalPrice);
    if(totalPrice > budget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }else{
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }
}
godzillaVSKong(["9587.88", "222", "55.68"])