function nthstep(array, n){
    let resultArray = [];
    for (let index = 0; index < array.length; index+=n) {
        if((index+n) % n ==0){
            resultArray.push(array[index]);
        }
    }
    return resultArray;
}
nthstep(['5', '20' ,'31' ,'4' ,'20'], 2)