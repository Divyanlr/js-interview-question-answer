function matrixMultiplication(a,b){
    let mul = [[0,0],[0,0]];
    for(let i=0; i<2; i++){
        for(let j=0; j<2; j++){
            for(let k=0; k<2; k++){
                mul[i][j] = mul[i][j] + a[i][k] * a[k][j];
            }
        }
    }
    return mul;
}

var a = [[4,8],[3,7]];
var b = [[1,0],[5,2]]; 
const result = matrixMultiplication(a,b);
console.log(result);