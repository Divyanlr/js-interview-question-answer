const multiplyByTwo = multiply(2);///
console.log(multiplyByTwo(4)); // Output: 8

const multiplyByFive = multiply(5);
console.log(multiplyByFive(3)); // Output: 15




function multiply(x) {

    return function (y) {

        return x * y;

    }

}