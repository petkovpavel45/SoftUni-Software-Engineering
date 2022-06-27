function storeProvision(currentStock, orderedProducts) {
  let stocks = {};

  for (let index = 0; index < currentStock.length; index += 2) {
    let nameProduct = currentStock[index];

    stocks[nameProduct] = Number(currentStock[index + 1]);
  }
  for (let index = 0; index < orderedProducts.length; index += 2) {
    let nameProduct = orderedProducts[index];

    if (!stocks.hasOwnProperty(nameProduct)) {
      stocks[nameProduct] = Number(orderedProducts[index + 1]);
    } else {
      stocks[nameProduct] += Number(orderedProducts[index + 1]);
    }
  }

  for (let key in stocks) {
    console.log(`${key} -> ${stocks[key]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
