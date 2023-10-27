function printNum(num1,num2,num3){
    let result;
    if(num1> num2 && num2> num3){
        result  = num1;
    }
    if(num2> num1 && num2> num3){
        result  = num2;
    }
    if(num3> num1 && num3 > num2){
        result  = num3;
    }
    console.log(`The largest number is ${result}.`)
}
printNum(1,2,3)