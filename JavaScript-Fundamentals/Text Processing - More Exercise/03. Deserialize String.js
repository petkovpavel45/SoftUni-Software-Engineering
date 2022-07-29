function deserializeString(input) {
  let arr = [];

  for (let curr of input) {
    if (curr === "end") {
      break;
    }
    let [letter, rest] = curr.split(":");
    let indexes = rest.split("/");

    for (let index of indexes) {
      index = Number(index);
      arr[index] = letter;
    }
  }
  console.log(arr.join(""));
}

deserializeString(["a:0/2/4/6", "b:1/3/5", "end"]);
