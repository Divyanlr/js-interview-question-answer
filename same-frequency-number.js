function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();
    
    if (str1.length !== str2.length) {
        return false;
    }
    
    const count1 = {};
    const count2 = {};
    
    for (let i = 0; i < str1.length; i++) {
        count1[str1[i]] = (count1[str1[i]] || 0) + 1;
        count2[str2[i]] = (count2[str2[i]] || 0) + 1;
    }
    
    for (let key in count1) {
        if (count1[key] !== count2[key]) {
            return false;
        }
    }
    
    return true;
}

// Testing the function
console.log(sameFrequency(182, 281));         // true
console.log(sameFrequency(34, 14));           // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222));          // false
