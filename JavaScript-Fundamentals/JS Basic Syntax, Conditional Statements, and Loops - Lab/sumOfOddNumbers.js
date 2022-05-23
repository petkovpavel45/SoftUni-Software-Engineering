function sumOfOddNumbers(n) {
    let sum = 0;
    let counter = 0;

    for(let i = 1; i <= 100; i++) {
        if(i % 2 !== 0) {
            counter++;
            sum += i;
            console.log(i);
        }
        if(counter === n) {
            break;
        }
    }
    console.log("Sum: " + sum);
}
sumOfOddNumbers(5)