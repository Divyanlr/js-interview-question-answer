function checkBrackets(string) {
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    const stack = [];
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
  
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        if (stack.length === 0) {
          return false;
        }
  
        const openingBracket = stack.pop();
        if (openingBrackets.indexOf(openingBracket) !== closingBrackets.indexOf(char)) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  const string = "()(({}))(})";
  const bracketsValidity = checkBrackets(string);
  console.log(bracketsValidity);
    