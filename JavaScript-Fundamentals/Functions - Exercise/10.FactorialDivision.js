function factorialDivision(numOne, numTwo) {
  function factorialCalc(num) {
    let res = 1;
    for (let i = num; i >= 1; i--) {
      res *= num;
      num -= 1;
    }
    return res;
  }
  console.log((factorialCalc(numOne) / factorialCalc(numTwo)).toFixed(2));
}
factorialDivision(5, 2);
