function matrixAddition(a,b){
    let sum = [[],[]];
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            sum[i][j] = a[i][j] + b[i][j];
        }
    }
    return sum;
}

var a = [[4,8],[3,7]];
var b = [[1,0],[5,2]]; 
const result = matrixAddition(a,b);
console.log(result);