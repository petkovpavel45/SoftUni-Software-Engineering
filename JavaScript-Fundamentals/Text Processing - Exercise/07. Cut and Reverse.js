function cutAndReverse(str) {
  let firstHalf = str
    .slice(0, str.length / 2)
    .split("")
    .reverse()
    .join("");
  let secondHalf = str
    .slice(str.length / 2)
    .split("")
    .reverse()
    .join("");
  console.log(firstHalf);
  console.log(secondHalf);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
