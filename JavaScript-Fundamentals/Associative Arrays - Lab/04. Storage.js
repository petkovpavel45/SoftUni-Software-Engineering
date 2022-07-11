function storages(input) {
  let storage = new Map();

  for (let lines of input) {
    let [product, qty] = lines.split(" ");
    qty = Number(qty);
    if (storage.has(product)) {
      let existing = storage.get(product);
      storage.set(product, qty + existing);
    } else {
      storage.set(product, qty);
    }
  }

  for (let iterator of storage) {
    console.log(`${iterator[0]} -> ${iterator[1]}`);
  }
}

storages(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
