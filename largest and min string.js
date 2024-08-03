function findMaxAndMinWords(sentence) {
    const words = sentence.split(" ");
  
    if (words.length === 0) {
      return { max: null, min: null };
    }
  
    let maxLengthWord = words[0];
    let minLengthWord = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > maxLengthWord.length) {
        maxLengthWord = words[i];
      }
  
      if (words[i].length < minLengthWord.length) {
        minLengthWord = words[i];
      }
    }
  
    return { max: maxLengthWord, min: minLengthWord };
  }
  
  const sentence = "The quick brown fox jumps over the lazy dog";
  const result = findMaxAndMinWords(sentence);
  
  console.log("Max word:", result.max); // Output: 'jumps'
  console.log("Min word:", result.min); // Output: 'The'