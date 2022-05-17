function sleepyTomCat(input) {
    let countDayOff = Number(input[0]);

    let daysOff = countDayOff * 127;
    let workingDays = (365 - countDayOff) * 63;
    let total = daysOff + workingDays;
    let diff = Math.abs(30000 - total);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if(total > 30000) {
        console.log("Tom will run away");
        console.log(`${h} hours and ${m} minutes more for play`)
    } else {
        console.log("Tom sleeps well");
        console.log(`${h} hours and ${m} minutes less for play`);
    }
}
sleepyTomCat(["113"])