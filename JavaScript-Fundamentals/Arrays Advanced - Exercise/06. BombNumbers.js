function bombNumbers(array, specialBomb) {
  let specialBombNumber = specialBomb[0];
  let power = specialBomb[1];
  let index = array.indexOf(specialBombNumber);

  while (index !== -1) {
    let startExplosion = Math.max(0, index - power);
    let endExplosion = power * 2 + 1;

    array.splice(startExplosion, endExplosion);
    index = array.indexOf(specialBombNumber);
  }
  let sum = 0;
  for (let nums of array) {
    sum += nums;
  }
  console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
