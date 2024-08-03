function countOccurrences(array) {
    const occurrenceMap = {};
  
    for (let i = 0; i < array.length; i++) {
      const number = array[i];
      occurrenceMap[number] = occurrenceMap[number] ? occurrenceMap[number] + 1 : 1;
    }
  
    return occurrenceMap;
  }
  
  const numbers = [1, 2, 3, 2, 4, 1, 5, 4, 2];
  const occurrences = countOccurrences(numbers);
  
  for (const number in occurrences) {
    console.log(`Number ${number} occurs ${occurrences[number]} times.`);
  }



// i/p
// [1, 2, 3, 2, 4, 1, 5, 4, 2]
// o/p

// Number 1 occurs 2 times.
// Number 2 occurs 3 times.
// Number 3 occurs 1 time.
// Number 4 occurs 2 times.
// Number 5 occurs 1 time.