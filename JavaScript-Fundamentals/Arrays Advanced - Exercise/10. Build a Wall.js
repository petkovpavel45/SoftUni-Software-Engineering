function buildAWall(array) {
  let targetWall = 30;
  array = array.map(Number);

  let daily = [];
  let concrete = 0;

  array.sort((a, b) => a - b);
  for (let index = 0; array[0] < targetWall; index++) {
    let blocks = array.filter(a => a < targetWall);
    array = blocks.map(x => x += 1);
    concrete = array.length * 195;
    daily.push(concrete);
  }

  let sum = 0;
  for (let index = 0; index < daily.length; index++) {
    sum += daily[index];
  }
  let pesosSum = sum * 1900;
  console.log(daily.join(", "));
  console.log(`${pesosSum} pesos`);
}
buildAWall([21, 25, 28]);
