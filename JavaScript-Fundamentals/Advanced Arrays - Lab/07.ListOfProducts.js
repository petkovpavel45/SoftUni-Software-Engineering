function listOfProducts(arr) {
  let orderedProducts = arr.sort();

  for (let i = 0; i < orderedProducts.length; i++) {
    let product = orderedProducts[i];
    console.log(`${i + 1}.${product}`);
  }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
