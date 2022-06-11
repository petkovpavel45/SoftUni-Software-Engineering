function nonDecreasingSubset(input) {
  let arr = [];
  let max = input[0];

  for (let index = 0; index < input.length; index++) {
    if (max <= input[index]) {
      max = input[index];
      arr.push(max);
    }
  }
  console.log(arr.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
