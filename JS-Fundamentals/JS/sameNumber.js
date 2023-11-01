function checkSameDigitsAndSum(number) {
    const numberStr = number.toString();
    const firstDigit = numberStr[0];
    let allSame = true;
    let sum = 0;
  
    for (let i = 0; i < numberStr.length; i++) {
      sum += parseInt(numberStr[i]);
      if (numberStr[i] !== firstDigit) {
        allSame = false;
      }
    }
  
    console.log(allSame);
    console.log(sum);
  }
