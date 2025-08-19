function getFreqOfWord(sentence){
    let words = sentence.split(" ");
    for (i of words) {
        let word = ("") ;
        let count = 0 ;
        if (i == i) {
            word = i
            count++;
        }
        return `${word}:${count}` ;
 }
}
console.log(getFreqOfWord("my name is thana is best my"))