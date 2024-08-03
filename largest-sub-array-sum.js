function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    // Initialize the max sum and the current sum of the first window
    let maxSum = 0;
    let tempSum = 0;
    
    // Calculate the sum of the first window
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    // Slide the window over the rest of the array
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
// Testing the function
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
//complexity O(n)


//  Kadane's Algorithm
function maxSubArray(num) {
    let maxSum = num[0];
    let tempSum = num[0];

    for (let i = 1; i < num.length; i++) {
        tempSum = Math.max(num[i], tempSum + num[i]);
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

// Example usage
let num = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(num)); // Output: 6 (subarray: [4, -1, 2, 1])
//complexity O(n)