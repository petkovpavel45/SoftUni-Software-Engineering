function solve(input) {
  let seq = input.shift().split(` `).map(Number);
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == `End`) {
      console.log(`Shot targets: ${counter} -> ${seq.join(` `)}`);
      break;
    }
    let index = Number(input[i]);
    if (index < seq.length && index >= 0 && seq[index] != -1) {
      let shot = seq[index];
      seq[index] = -1;
      counter++;
      for (let i = 0; i < seq.length; i++) {
        if (seq[i] != -1) {
          if (shot >= seq[i]) {
            seq[i] += shot;
          } else {
            seq[i] -= shot;
          }
        }
      }
    }
  }
}

solve(["24 50 36 70", "0", "4", "3", "1", "End"]);
