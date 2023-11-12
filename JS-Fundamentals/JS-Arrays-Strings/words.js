function revealWords(words, phrase){
    let wordsArr = words.split(', ');
    let phraseArr = phrase.split(' ');

    for (let i = 0; i < phraseArr.length; i++) {
        for (const word of wordsArr) {
            if (phraseArr[i].includes('*') && phraseArr[i].length === word.length) {
                phraseArr[i] = word;
            }
        }
    }

    console.log(phraseArr.join(' '));
}
