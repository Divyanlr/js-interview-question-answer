// [1,2,3,4,3,5,4,6,7,8] --> total elements - 10
// find sum of largest consicutive digit

// let subset number --4 
// number  of iteration will be -- 10-4+1
//O(n2)

function largestSum(array,num)
{
   if(array.length < num){
    throw new Error("number should not be grater than array");
   }else{
    let max = 0;
    for(let i=0; i<array.length - num +1; i++){
        let temp = 0;
        for(let j=0; j<num; j++){
            temp += array[i+j];
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
   }
}

const result = largestSum([1,2,3,4,3,5,4,6,7,8],'5');
console.log(result);


//Better solution , istead ofadding subset items multiple time just add next element and substract first elemnet and complare
// [1,2,3,4,3,5,4,6,7,8] 
//1+2+3 = temp 1st iteration
//  temp+4 - 1

function maxSubarraySum (arr , num){
    let max = 0;
    let temp = 0;
    if(arr.length < num) return null;

    for(let i=0; i<num; i++){
        max += arr[i];
    }

    temp = max;

    for(i=num; i<arr.length; i++){
        temp = temp - arr[i-num] + arr[i];
        max = Math.max(max, temp);
    }
    return max;
}

maxSubarraySum([2,6,9,3,2,4,5,6,2,4,8,5,3])
//O(n)