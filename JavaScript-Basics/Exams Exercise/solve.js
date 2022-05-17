function solve(input) {
    let index = 0;
    let h = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let isCake = true;
    let cakeSize = h * l;

    while(command !== "STOP") {
        let pieces = Number(command);
        cakeSize -= pieces;
        if(cakeSize < 0) {
            let diff = Math.abs(cakeSize - pieces);
            console.log(`No more cake left! You need ${diff} pieces more.`);
            isCake = false;
            break;
        }
        command = input[index];
        index++;
    }

}
solve(["10",
"10",
"20",
"20",
"20",
"20",
"21"])




