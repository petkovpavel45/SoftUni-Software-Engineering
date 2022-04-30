function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;
    let isFound = false;

    for(let i = startNumber; i <= endNumber; i++) {
        for(j = startNumber; j <= endNumber; j++) {
            counter++;
            if(i + j === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if(isFound) {
            break;
        }
    }
    if(!isFound){
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["1",
"10",
"5"])
