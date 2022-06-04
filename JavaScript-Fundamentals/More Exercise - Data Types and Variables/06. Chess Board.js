function solve(size) {
  console.log(`<div class="chessboard">`);
  for (let a = 1; a <= size; a++) {
    if (a % 2 !== 0) {
      console.log(` <div>`);
      for (let b = 1; b <= size; b++) {
        if (b % 2 !== 0) {
          console.log(`  <span class="black"></span>`);
        } else {
          console.log(`  <span class="white"></span>`);
        }
      }
      console.log(` </div>`);
    } else {
      console.log(` <div>`);
      for (let c = 1; c <= size; c++) {
        if (c % 2 === 0) {
          console.log(`  <span class="black"></span>`);
        } else {
          console.log(`  <span class="white"></span>`);
        }
      }
      console.log(` </div>`);
    }
  }
  console.log(`</div>`);
}
solve(4);
