var s1 = "12346";
var s2 = "122";

// String output = "12468";

function addNumberString(s1,s2){
  const sum = Number(s1) + Number(s2);
  return sum.toString();
}

console.log(addNumberString(s1,s2));



// without using Number()
function addNumberStrings(num1, num2) {
    let carry = 0;
    let sum = "";
    let maxLength = Math.max(num1.length, num2.length);
  
    for (let i = 0; i < maxLength; i++) {
      const digit1 = i < num1.length ? parseInt(num1[num1.length - 1 - i]) : 0;
      const digit2 = i < num2.length ? parseInt(num2[num2.length - 1 - i]) : 0;
      const digitSum = digit1 + digit2 + carry;
  
      carry = Math.floor(digitSum / 10);
      sum = (digitSum % 10).toString() + sum;
    }
  
    if (carry > 0) {
      sum = carry.toString() + sum;
    }
  
    return sum;
  }
  
  const number1 = "123";
  const number2 = "456";
  
  const result = addNumberStrings(number1, number2);
  console.log(result); // Output: "579"