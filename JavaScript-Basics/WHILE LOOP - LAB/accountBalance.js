function accountBalance(input) {
    let index = 0;
    let currenElement = input[index];
    let total = 0;

    while(currenElement !== "NoMoreMoney") {
        let currentNum = Number(currenElement);
        if(currentNum < 0){
            console.log("Invalid operation!");
            break;
        }
        total += currentNum;
        console.log(`Increase: ${currentNum.toFixed(2)}`);
        index++;
        currenElement = input[index];
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
