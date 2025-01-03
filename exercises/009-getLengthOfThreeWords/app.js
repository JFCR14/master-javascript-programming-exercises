function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let sumatoria = 0;
sumatoria = word1.length + sumatoria;
sumatoria = word2.length + sumatoria;
sumatoria = word3.length + sumatoria;

return sumatoria;

}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
