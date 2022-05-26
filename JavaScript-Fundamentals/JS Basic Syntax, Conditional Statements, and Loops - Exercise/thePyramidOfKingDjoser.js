function solve(base, increment) {
  let gold = 0;
  let lapisLazuli = 0;
  let marble = 0;
  let stone = 0;
  let finalHeight = 0;

  for (let index = base; index > 0; index -= 2) {
    finalHeight++;
    if (index < 3) {
      gold = index * index * increment;
    } else if (finalHeight % 5 == 0) {
      stone += (index - 2) * (index - 2) * increment;
      lapisLazuli += (index * 4 - 4) * increment;
    } else {
      stone += (index - 2) * (index - 2) * increment;
      marble += (index * 4 - 4) * increment;
    }
  }
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(finalHeight * increment)}`);
}

solve(11, 0.75);
