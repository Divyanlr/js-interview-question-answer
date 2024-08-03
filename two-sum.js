function twoSum(nums, target) {
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (results.includes(complement)) {
            return [results.indexOf(complement), i];
        }
        results.push(nums[i]);
    }

    throw new Error("No two sum solution");
}
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
console.log(twoSum([9, 3, 1, 7, 5], 4)); // Output: [1, 2]

//   Using a Map
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    throw new Error("No two sum solution");
}
//  Using an Array
// Pros:  Simple and straightforward to understand.
// Cons: Time Complexity: O(n^2) in the worst case because includes and indexOf operations both take O(n) time.
//       Space Complexity: O(n) for storing elements in the results array.

// Using a Map
// Pros: Time Complexity: O(n) because has and get operations on a Map take O(1) time on average.
//       Space Complexity: O(n) for storing elements in the Map.
// Cons: Slightly more complex to understand if you are not familiar with Maps.

// Comparison
// Efficiency: The Map-based solution is more efficient due to its average O(1) lookup time compared to the O(n) lookup time of an array.
// Simplicity: The array-based solution might seem simpler, but it quickly becomes inefficient for larger inputs.

// Conclusion
// The Map-based approach is generally preferred for solving the two-sum problem due to its better time complexity.