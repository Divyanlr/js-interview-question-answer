var isPalindrome = function(x) {
    if (x < 0) return false;
    var str = x.toString();
    let left = 0;
    let right = str.length-1;
    while(left<right){
        if(str[left] !== str[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
};

console.log(palindrome(12321));