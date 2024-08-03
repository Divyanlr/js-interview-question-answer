// An example nested array
const nestedArray = [1, 2, [3, 4, [5, 6], 7], 8, [9]];

// Flatten the nested array using the flat method
const flattenedArray = nestedArray.flat(Infinity);

// Log the flattened array to the console
console.log(flattenedArray);


// -----------------------------
// by using custom method A recursive function to flatten a nested array
function flattenArray(array) {
    return array.reduce((accumulator, currentValue) => {
      if (Array.isArray(currentValue)) {
        return accumulator.concat(flattenArray(currentValue));
      } else {
        return accumulator.concat(currentValue);
      }
    }, []);
  }
  
  // An example nested array
  const nestedArray = [1, 2, [3, 4, [5, 6], 7], 8, [9]];
  
  // Flatten the nested array using the flattenArray function
  const flattenedArray = flattenArray(nestedArray);
  
  // Log the flattened array to the console
  console.log(flattenedArray);