function condenseArrayToNumber(arr) {
  while (arr.length > 1) {
    let condensed = [];

    for (i = 0; i < arr.length - 1; i++) {
      num1 = Number(arr[i]);
      num2 = Number(arr[i + 1]);
      condensed.push(num1 + num2);
    }
    arr = condensed;
  }
  console.log(arr[0]);
}
condenseArrayToNumber([5, 0, 4, 1, 2]);
