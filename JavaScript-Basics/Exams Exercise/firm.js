function firm(input) {
    let needHours = Number(input[0]);
    let days = Number(input[1]);
    let countWorkers = Number(input[2]);

    let hoursOfWork = (days * 0.9) * 8;
    let hoursOfOutsideWork = countWorkers * 2 * days;
    let totalHours = hoursOfOutsideWork + hoursOfWork;
    let diff = Math.abs(totalHours - needHours);

    if(totalHours >= needHours) {
        console.log(`Yes!${Math.floor(diff)} hours left.`);
    }else {
        console.log(`Not enough time!${Math.ceil(diff)} hours needed.`);
    }

}
firm(["99", "3", "1"])