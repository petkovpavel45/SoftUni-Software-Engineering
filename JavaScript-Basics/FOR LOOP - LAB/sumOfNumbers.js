function sumOfNumbers(input) {
    let n = input[0];
    let textN = "" + n;
    let res = 0;

    for(i = 0; i < textN.length; i++){
        res += Number(textN[i]);
    }
    console.log(`The sum of the digits is:${res}`)
}
sumOfNumbers(["1234"])