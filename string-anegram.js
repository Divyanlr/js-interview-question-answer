//string anegram
//'hello' -- 'llheo'  
//'hello' -- 'llleo' ---> not anagram
//conditions:  both string length should be equal , 
//             number of occurance of letter should equal

//string - 'hello' -->{h:1,e:1,l:2,o:1} -- hash map(key, value)

function isAnegram(string1,string2){
    if(string1.length != string2.length)
    {
        return false;
    }

    counter1 = {}

    for(let letter of string1){
        counter1[letter] = (counter1[letter] || 0) + 1;
    }
    console.log(counter1);

    for(let item of string2){
        if(!counter1[item]){
            return false;
        }
        
        counter1[item] -= 1;
    }
    return true;
}

const result = isAnegram('hello','llheo');
console.log(result);


//linear complexity o(n)