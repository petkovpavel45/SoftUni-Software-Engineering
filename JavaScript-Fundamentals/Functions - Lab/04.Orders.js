function orders(product, quantity) {
    let res = 0;
    switch (product) {
        case "coffee":
            res = 1.5 * quantity;
            break;
        case "water":
            res = 1.00 * quantity;
            break;
        case "coke": 
            res = 1.40 * quantity;
            break;
        case "snacks":
            res = 2.00 * quantity;
            break;
    }
    return res.toFixed(2);
}
console.log(orders("water", 5));