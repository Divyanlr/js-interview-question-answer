function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (end < nums.length) {
        // Add current element to the total
        total += nums[end];
        end++;

        // While the total is greater than or equal to the required sum
        while (total >= sum) {
            // Update the minimum length
            minLen = Math.min(minLen, end - start);
            // Subtract the element at the start of the window
            total -= nums[start];
            start++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

// Testing the function
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
