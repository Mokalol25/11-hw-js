function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

const sentence = prompt("Write sentence");
const longestWord = findLongestWord(sentence);
console.log(longestWord)