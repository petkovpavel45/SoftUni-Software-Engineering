function easterLunch(input){
    let kozunatsi = Number(input[0]);
    let packEggs = Number(input[1]);
    let kgCookies = Number(input[2]);

    let priceKozunatsi = kozunatsi * 3.2;
    let priceEggs = packEggs * 4.35;
    let priceCookies = kgCookies * 5.4;
    let pricePaintEggs = packEggs * 12 * 0.15;
    let totalPrice = priceKozunatsi + priceEggs + priceCookies + pricePaintEggs;
    
    console.log(totalPrice.toFixed(2))
    
}
easterLunch(["3", 
"2", 
"3"])