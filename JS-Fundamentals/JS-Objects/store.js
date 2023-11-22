function updateStock(currentStock, orderedProducts) {
    let stock = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);
        stock[product] = quantity;
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let product = orderedProducts[i];
        let quantity = Number(orderedProducts[i + 1]);
        if (stock.hasOwnProperty(product)) {
            stock[product] += quantity; 
        } else {
            stock[product] = quantity; 
        }
    }

    for (let product in stock) {
        console.log(`${product} -> ${stock[product]}`);
    }
}
