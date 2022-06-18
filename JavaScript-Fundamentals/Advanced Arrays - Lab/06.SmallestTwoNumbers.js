function smallestTwoNumbers(arr) {
  let smallestNums = arr.sort((a, b) => a - b).slice(0,2);
  console.log(smallestNums.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);
