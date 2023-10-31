function printsum(int1, int2){
    let sum = 0; 
    let logString = '';
    for (let index = int1; index <= int2; index++) {
        logString+=index;
        if (index < int2) {
            logString += ' ';
        }
        sum+=index;
    }
    console.log(logString)
    console.log("Sum: " + sum);

}
printsum(5,10)