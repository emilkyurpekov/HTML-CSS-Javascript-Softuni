function findAndPrintSpecialWords(inputString) {
    var words = inputString.split(/\s+/);
  
    words.forEach(function(word) {
      if (word.startsWith('#') && /^[a-zA-Z]+$/.test(word.substring(1))) {
        console.log(word.substring(1));
      }
    });
  }