function repainting(input){
    
    let Nylon = Number(input[0]);
    let Paint = Number(input[1]);
    let Thinner = Number(input[2]);
    let hoursDoneWork = Number(input[3]);

    let amountNylon = (Nylon + 2) * 1.5;
    let amountPaint = (Paint * 1.10) * 14.50;
    let amountThinner = Thinner * 5;
    let totalPriceMaterials = amountNylon + amountPaint + amountThinner + 0.4;
    let priceForWork = (totalPriceMaterials * 0.30) * hoursDoneWork;
    let totalPrice = totalPriceMaterials + priceForWork;

    console.log(totalPrice);

}
repainting(["10", "11", "4", "8"])