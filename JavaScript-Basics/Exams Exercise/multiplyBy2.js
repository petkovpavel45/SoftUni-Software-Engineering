function multiplyBy2(input) {
    let index = 0;
    let nums = Number(input[index]);
    index++;
    let result = 0;

    while(nums >= 0) {
         result = nums * 2;
         console.log(`Result: ${result.toFixed(2)}`);
         nums = Number(input[index]);
         index++;
    }
    if(nums < 0) {
        console.log("Negative number!");
    }
}
multiplyBy2(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"])