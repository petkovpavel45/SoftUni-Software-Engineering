function sumNumbers(input) {
    let goalNumb = Number(input[0]);
    let sumOfNumbers = 0;
    let index = 1;

    while (sumOfNumbers < goalNumb) {
        let currentNum = Number(input[index]);
        sumOfNumbers += currentNum;
        index++;

    }
    console.log(sumOfNumbers);
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])