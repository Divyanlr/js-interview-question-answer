function findFirstNonRepeatingCharacter(string) {
    const charCount = {};
  
    // Count the occurrences of each character
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  
    // Find the first character with count 1
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    // If no non-repeating character found, return null or any suitable value
    return null;
  }
  
  const string = "abacddbec";
  const firstNonRepeatingChar = findFirstNonRepeatingCharacter(string);
  console.log(firstNonRepeatingChar);
  