function solve(str) {
  let nums = str
    .split(" ")
    .map(Number)
    .sort((a, b) => {
      return b - a;
    });
  let avg =
    nums.reduce((acc, currNum) => {
      return (acc += currNum);
    }, 0) / nums.length;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (currNum > avg && arr.length < 5) {
      arr.push(currNum);
    }
  }
  if (arr.length > 0) {
    console.log(arr.join(" "));
  } else {
    console.log("No");
  }
}

solve("1");
