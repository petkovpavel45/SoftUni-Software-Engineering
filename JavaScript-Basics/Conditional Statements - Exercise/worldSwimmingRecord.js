function worldSwimmingRecord (input){
    let recordInSec = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeInSec = Number(input[2]);

    let delay = Math.floor(distanceInM / 15) * 12.5;
    let totalTime = distanceInM * timeInSec + delay;
    let neededSec = totalTime - recordInSec;

    if (totalTime < recordInSec){

        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    
    }else {
        console.log(`No, he failed! He was ${neededSec.toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["10464", "1500", "20"])