let countWords = ["apple", "banana", "apple", "orange", "banana", "apple"]

let a = countWords.reduce((count, i) => {count[i] = (count[i] || 0) + 1;return count;}, {});
console.log(a)
