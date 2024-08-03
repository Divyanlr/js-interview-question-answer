// i/p--> [-5,-4,-3,-2,0,2,4,6,8]
// o/p--> [-4,4]

function sumPairZero(array){
    for(num of array){
        for(let j=1; j<=array.length; j++)
        {
            if(num + array[j] === 0)
            {
                return [num,array[j]];
            }
        }
    }
}


const result=sumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);

// o(n^2) quadratic time complexity
