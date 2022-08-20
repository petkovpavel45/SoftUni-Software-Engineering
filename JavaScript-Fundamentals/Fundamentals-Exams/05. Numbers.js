function numbers(numsStrings) {
  let nums = numsStrings.split(" ").map(Number);
  let len = nums.length;
  let sum = nums.reduce((a, b) => a + b);
  let avg = sum / len;
  let arr = [];
  let isHaveNums = false;
  for (let index = 0; index < nums.length; index++) {
    let num = nums[index];

    if (num > avg) {
      arr.push(num).sort((a, b) => b - a);
      let slicedArr = arr.slice(0, 5);
      arr = slicedArr;
      isHaveNums = true;
    }
  }
  if (!isHaveNums) {
    console.log("No");
  } else {
    console.log(arr.join(" "));
  }
}
numbers("1");
