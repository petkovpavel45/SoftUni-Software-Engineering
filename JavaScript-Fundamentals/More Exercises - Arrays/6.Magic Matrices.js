function magicMatrices(input) {
  let n = input.length;
  let m = input.length;
  console.log(n);

  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < m; j++) {
      sum1 += input[i][j];
      sum2 += input[j][i];
    }

    if (sum1 == sum2) return true;
  }

  return false;
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
