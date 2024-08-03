function reverseMatrix(matrix) {
    // Create a new array to store the reversed matrix
    const reversedMatrix = [];
  
    // Iterate over each row in the matrix
    for (let i = matrix.length - 1; i >= 0; i--) {
      // Create a new array to store the reversed row
      const reversedRow = [];
  
      // Iterate over each element in the row
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        // Add the element to the reversed row array
        reversedRow.push(matrix[i][j]);
      }
  
      // Add the reversed row to the reversed matrix array
      reversedMatrix.push(reversedRow);
    }
  
    return reversedMatrix;
  }
  
  // Example usage
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const reversedMatrix = reverseMatrix(matrix);
  console.log(reversedMatrix);
  