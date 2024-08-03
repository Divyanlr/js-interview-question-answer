function palindrome(str){
    let reverse = str.split('').reverse().join('');
    return reverse.toLowerCase() === str.toLowerCase();
}

 console.log(palindrome('heooooo'));
