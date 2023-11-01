function performOperations(startingNumber, ...operations) {
    let number = parseFloat(startingNumber);

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "chop") {
            number /= 2;
        } else if (operations[i] === "dice") {
            number = Math.sqrt(number);
        } else if (operations[i] === "spice") {
            number += 1;
        } else if (operations[i] === "bake") {
            number *= 3;
        } else if (operations[i] === "fillet") {
            number -= 0.2 * number;
        } else {
            console.log("Invalid operation: " + operations[i]);
            return;
        }
        console.log(number);
    }

}
performOperations(32,"chop","chop","chop","chop","chop")