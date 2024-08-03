//using frequency counter
function areThereDuplicates(...args) {
    const frequencyCounter = {};

    for (let val of args) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
        if (frequencyCounter[val] > 1) {
            return true;
        }
    }

    return false;
}

// Testing the function
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true



// Multiple pointers
function areThereDuplicates(...args) {
    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });


    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}



// Linear solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}