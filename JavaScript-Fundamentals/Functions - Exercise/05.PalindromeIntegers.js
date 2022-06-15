function pallindromeInteger(input) {
  let arrOfNums = input;

  function isPalindrom(nums) {
    let number = nums;
    let reversedNum = Number(nums.toString().split("").reverse().join(""));
    if (reversedNum === number) {
      return true;
    } else {
      return false;
    }
  }
  for (let index = 0; index < arrOfNums.length; index++) {
    let curNum = arrOfNums[index];
    console.log(isPalindrom(curNum));
  }
}
pallindromeInteger([123, 323, 421, 124561]);
