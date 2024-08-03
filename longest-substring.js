//largest substring without repeating character
// Brute force approach  o(n2) --finding all combinations 
// here we use sliding window approach

var lengthOfLargestSubstring = function(str){
    if(!str){
        return 0;
    }

    let end =0;
    let start =0;
    let maxLength = 0;

    const uniqueCharacter = new Set();

    while(end < str.length){
        if(uniqueCharacter.has(str[end])){
            uniqueCharacter.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacter.size)
        }
        else{
            uniqueCharacter.delete(str[start]);
            start++;
        }
    }
    return maxLength;
};

console.log(lengthOfLargestSubstring("abcabcbb"));


// Initialize Pointers and Variables: Start with a pointer for the beginning of the window, a variable to store the maximum length, and a hash map to keep track of characters and their last seen positions.
// Expand the Window: Iterate through the string with an end pointer.
// Adjust the Start Pointer: If a character is repeated within the current window, move the start pointer to the right of the last seen position of the repeated character.
// Update the Maximum Length: Calculate the length of the current window and update the maximum length if the current window is longer.
// Return the Result: Return the maximum length found.

function findLongestSubstring(str) {
    let start = 0;
    let maxLength = 0;
    let seenChars = {};

    for (let end = 0; end < str.length; end++) {
        let char = str[end];
        
        if (seenChars[char] !== undefined && seenChars[char] >= start) {
            start = seenChars[char] + 1;
        }

        seenChars[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Testing the function
console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
