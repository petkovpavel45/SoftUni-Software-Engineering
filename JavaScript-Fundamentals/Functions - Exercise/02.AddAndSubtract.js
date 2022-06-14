function addAndSubtract(num1, num2, num3) {
    function sum(numOne, numTwo) {
        return numOne + numTwo;
    }
    let resSubtract = (result, numThree) => result - numThree;
    let result = sum(num1, num2);
    let finalResult = resSubtract(result, num3);
    console.log(finalResult);
}
addAndSubtract(23, 6, 10);