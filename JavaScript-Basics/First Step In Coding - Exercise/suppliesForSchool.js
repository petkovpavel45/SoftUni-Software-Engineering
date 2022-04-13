function suppliesForSchool (input){

    let penPackets = Number(input[0]);
    let markersPackets = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);

    let pricePenPackets = penPackets * 5.8;
    let priceMarkersPackets = markersPackets * 7.2;
    let priceDetergent = detergent * 1.2;
    let sumMaterials = pricePenPackets + priceMarkersPackets + priceDetergent;
    let totalDiscount = sumMaterials * (discount / 100);
    let totalPrice = sumMaterials - totalDiscount;

    console.log(totalPrice);
}
suppliesForSchool(["2", "3", "4", "25"])