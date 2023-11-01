function fruits(fruits,grams,price){
    let kiliograms = grams/1000;
    let calculatedPrice = price*kiliograms;
    console.log(`I need $${calculatedPrice.toFixed(2)} to buy ${kiliograms.toFixed(2)} kilograms ${fruits}.`)
}
fruits("orange",2500,1.80)