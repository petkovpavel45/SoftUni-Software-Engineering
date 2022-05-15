function pipesInPool (input){
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let p1For3Hours = p1 * h;
    let p2For3Hours = p2 * h;
    let totalFor3hours = p1For3Hours + p2For3Hours;
    let totalFor3hoursInPercentage = (totalFor3hours / v) * 100;
    let p1For3HoursInPercentage = (p1For3Hours / totalFor3hours) * 100;
    let p2For3HoursInPercentage = (p2For3Hours / totalFor3hours) * 100;
    if(totalFor3hours < v){
        console.log(`The pool is ${totalFor3hoursInPercentage.toFixed(2)}% full. Pipe 1: ${p1For3HoursInPercentage.toFixed(2)}%. Pipe 2: ${p2For3HoursInPercentage.toFixed(2)}%.`);
    }else {
        let overflows = Math.abs(totalFor3hours - v);
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${overflows.toFixed(2)} liters.`);
    }
}
pipesInPool(["100", "100", "100", "2.5"])