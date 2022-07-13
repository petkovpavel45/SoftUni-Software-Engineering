function minerTask(input) {
  let resources = {};

  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let qty = Number(input[i + 1]);
    if (!resources.hasOwnProperty(resource)) {
      resources[resource] = qty;
    } else {
      resources[resource] += qty;
    }
  }

  for (const key in resources) {
    console.log(`${key} -> ${resources[key]}`);
  }
}

minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
