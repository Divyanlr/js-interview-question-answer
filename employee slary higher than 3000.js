const employees = [
    { id: 1, name: "John", salary: 200 },
    { id: 2, name: "Jane", salary: 400 },
    { id: 3, name: "Bob", salary: 300 },
    { id: 4, name: "Alice", salary: 500 },
  ];
  
  const highSalaryEmployees = employees.filter((employee) => {
    return employee.salary > 300;
  });
  
  console.log(highSalaryEmployees);



// ....................
  const employees = [
    { id: 1, name: "John", salary: 200 },
    { id: 2, name: "Jane", salary: 400 },
    { id: 3, name: "Bob", salary: 300 },
    { id: 4, name: "Alice", salary: 500 },
  ];
  
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 300) {
      console.log(`${employees[i].name} has a salary greater than 300`);
    }
  }