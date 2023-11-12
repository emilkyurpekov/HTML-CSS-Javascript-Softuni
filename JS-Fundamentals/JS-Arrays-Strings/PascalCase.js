function pascalCaseSplitter(phrase){
    let splitWords = [];
    
    let foundUpperCase = false;
    let word = '';
    for(let i = 0; i < phrase.length; i++){
        if(phrase.charAt(i) === phrase.charAt(i).toUpperCase()){
            foundUpperCase = true;
        }
        if(foundUpperCase){
            word += phrase.charAt(i);
        }

        if(phrase.charAt(i + 1) === phrase.charAt(i + 1).toUpperCase()){
            splitWords.push(word);
            word = '';
            foundUpperCase = false;
        }
    }

    console.log(splitWords.join(', '));
}
