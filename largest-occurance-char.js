// hello world  o/p--> l (since 3 times)
function findMostFrequentChar(str) {
    if (str.length === 0) {
      return null;
    }
  
    const charMap = {};
    let maxCount = 0;
    let mostFrequentChar = '';
  
    // Build character frequency map
    for (let char of str) {
      charMap[char] = charMap[char] + 1 || 1;
      if (charMap[char] > maxCount) {
        maxCount = charMap[char];
        mostFrequentChar = char;
      }
    }
  
    return mostFrequentChar;
  }
  
  const sentence = "Hello, world!";
  const mostFrequent = findMostFrequentChar(sentence);
  
  console.log('Most frequent character:', mostFrequent); // Output: 'l'
  
  
// .....with forEach.....
function largestString(array){
    const map = {};
    array.split('').array.forEach(element => {
        map[element] = map[element] ? map[element] + 1 : 1;
    });

    let max = 1;
    char = str[0];
    for(let k in map){
        if(map[k] > max){
            max = map[k];
            char = k;
        }
    }
}

const result = largestString('hello world');
console.log(result);