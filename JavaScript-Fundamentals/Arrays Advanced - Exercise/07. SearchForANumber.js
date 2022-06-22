function searchForANumber(firstArray, secondArray) {
  let firstNum = secondArray[0];
  let secondNum = secondArray[1];
  let thirdNum = secondArray[2];

  let modifiedArr = firstArray.slice(0, firstNum);
  modifiedArr.splice(0, secondNum);

  let count = 0;

  for (let index = 0; index < modifiedArr.length; index++) {
    let char = modifiedArr[index];
    if (char === thirdNum) {
      count++;
    }
  }
  console.log(`Number ${thirdNum} occurs ${count} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
