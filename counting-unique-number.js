// count unique numbers
// [1,1,2,2,3,4,4,5,6,7,8,8]
// o/p --> 8

// there is one i and j , check if i&j equal -->nothing to do
//  if different increment i & place j value to i 

function uniqueNumberCount(arr){
    if(arr.length === 0) return 0;
    var i=0;
    for(var j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            a[i] = arr[j];
        }
    }
    return i+1;
}


const result = uniqueNumberCount([1,1,2,2,3,4,4,5,6,7,8,8]);
console.log(result);

//linear time complexity o(n)