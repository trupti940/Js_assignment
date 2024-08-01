// Function to find the highest paid employee
function highestPaid(employees) {
    return employees.reduce((max, employee) => {
        return employee.salary > max.salary ? employee : max;
    }, employees[0]);
}

// Function to swap the first and last employees using destructuring
function destructuringToSwap(employees) {
    [employees[0], employees[employees.length - 1]] = [employees[employees.length - 1], employees[0]];
    return employees;
}

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)); 
// Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

console.log(destructuringToSwap(employees)); 
// Output: [
//   { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
//   { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
//   { name: 'John Doe', age: 30, department: 'HR', salary: 50000 }
// ]
