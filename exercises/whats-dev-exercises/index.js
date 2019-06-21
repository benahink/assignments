// finding the longest word in a string
function longestWord(str) {
    let words = str.split(' ')
    let longest = '';
    words.map(word => {
      if(word.length > longest.length) {
        longest = word;
      }
    })
    return longest.length
  }
  
  console.log(longestWord("this string has several words in it"))