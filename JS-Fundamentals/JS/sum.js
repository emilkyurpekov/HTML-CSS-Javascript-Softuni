function sumOfDigits(number) {
    const numStr = number.toString();
    
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }

    return sum;
}