function flattenObject(obj) {
    const flattened = {};
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        const nested = flattenObject(obj[key]);
        for (const nestedKey in nested) {
          flattened[key + "." + nestedKey] = nested[nestedKey];
        }
      } else {
        flattened[key] = obj[key];
      }
    }
    return flattened;
  }
  
  const obj2 = {
    a: 1,
    b: {
      c: 2,
      d: 4,
    },
  };
  
  const flattenedObj = flattenObject(obj2);
  console.log(flattenedObj);

  

//   compare if two nested objects are equal
function isDifferent(obj1, obj2) {
    for (const key in obj1) {
      if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        // Recursively compare nested objects
        if (isDifferent(obj1[key], obj2[key])) {
          return true;
        }
      } else if (obj1[key] !== obj2[key]) {
        // Compare non-object properties
        return true;
      }
    }
    return false;
  }
  
  const obj1 = {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
  };
  
  const obj2 = {
    a: 1,
    b: {
      c: 2,
      d: 4,
    },
  };
  
  console.log(isDifferent(obj1, obj2)); 