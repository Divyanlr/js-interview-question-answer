
var productExceptSelf = function(nums) {
    const length = nums.length;
    const output = new Array(length).fill(1);
    
    // Calculate the product of all elements to the left of each element
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        output[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    
    // Calculate the product of all elements to the right of each element
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return output;
};

// Example usage
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
