function yardGreening (input){

    let m2Landscaped = Number(input[0]);

    let priceForTheWholeYard = m2Landscaped * 7.61;
    let discount = 0.18 * priceForTheWholeYard;
    let finalPrice = priceForTheWholeYard - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening(["550"])