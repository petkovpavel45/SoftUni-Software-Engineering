function smallestOfThreeNumbers (num1, num2, num3) {
    let minNum = (num1, num2, num3) => Math.min(num1, num2, num3);
    console.log(minNum(num1, num2, num3));
}
smallestOfThreeNumbers(2, 5, 3)