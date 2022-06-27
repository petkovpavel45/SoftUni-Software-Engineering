function towns(arr) {
  for (let el of arr) {
    let tokens = el.split(" | ");
    let name = tokens[0];
    let latitude = Number(tokens[1]).toFixed(2);
    let longitude = Number(tokens[2]).toFixed(2);

    let towns = {
      town: name,
      latitude: latitude,
      longitude: longitude,
    };
    console.log(towns);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
