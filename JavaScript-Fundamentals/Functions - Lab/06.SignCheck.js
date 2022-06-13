function signCheck(num1, num2, num3) {
  let res = num1 * num2 * num3;
  if(res > 0){
      return "Positive";
  } else {
      return "Negative";
  }
}
console.log(signCheck(-5,
    1,
    1));