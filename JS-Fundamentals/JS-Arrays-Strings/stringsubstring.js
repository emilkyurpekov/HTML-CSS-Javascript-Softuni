function stringSubstring(word, phrase){
    word = word.toLowerCase();
    let phraseArray = phrase.split(' ');

    for (const phraseWord of phraseArray) {
        if(phraseWord.toLowerCase() == word){
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}