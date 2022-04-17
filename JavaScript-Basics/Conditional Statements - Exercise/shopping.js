function shopping(input){
    let budget = Number(input[0]);
    let videocardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let countRAM = Number(input[3]);

    let priceVideocards = videocardCount * 250;
    let priceOneProcessor = priceVideocards * 0.35;
    let priceProcessors = priceOneProcessor * processorCount;
    let priceOneRAM = priceVideocards * 0.10;
    let priceRAM = priceOneRAM * countRAM;
    let totalPrice = priceRAM + priceProcessors + priceVideocards;

    if (videocardCount > processorCount){
        totalPrice = totalPrice * 0.85
    }
    let diff = Math.abs(budget - totalPrice)
    if(totalPrice <= budget){
        console.log(`You have ${diff.toFixed(2)} leva left! `)
    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }

}
shopping(["900", "2", "1", "3"])