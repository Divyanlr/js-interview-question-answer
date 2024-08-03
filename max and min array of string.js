function findMaxAndMinStrings(strings) {
    if (strings.length === 0) {
      return { max: null, min: null };
    }
  
    return strings.reduce((acc, curr) => {
      if (acc.max === null || curr > acc.max) {
        acc.max = curr;
      }
  
      if (acc.min === null || curr < acc.min) {
        acc.min = curr;
      }
  
      return acc;
    }, { max: null, min: null });
  }
  
  const strings = ['apple', 'banana', 'orange', 'kiwi', 'mango'];
  const result = findMaxAndMinStrings(strings);
  
  console.log('Max string:', result.max); // Output: 'orange'
  console.log('Min string:', result.min); // Output: 'apple'