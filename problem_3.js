// Custom Functions for Employee Operations

function employeesInDepartment(employees, department) {
    return employees
        .filter(employee => employee.department === department)
        .map(employee => employee.name);
}

function totalSalaryByDepartment(employees, department) {
    return employees
        .filter(employee => employee.department === department)
        .reduce((total, employee) => total + employee.salary, 0);
}

function employeeSummary(employees) {
    return employees.map(employee => 
        `${employee.name} works in ${employee.department} and earns $${employee.salary} annually.`
    );
}

// Example usage
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 }
];

console.log(employeesInDepartment(employees, "Finance"));
// Output: ['Jane Smith', 'Maria Lopez']

console.log(totalSalaryByDepartment(employees, "Finance"));
// Output: 125000

console.log(employeeSummary(employees));
// Output:
// [
//     "John Doe works in HR and earns $50000 annually.",
//     "Jane Smith works in Finance and earns $60000 annually.",
//     "Alex Johnson works in IT and earns $70000 annually.",
//     "Maria Lopez works in Finance and earns $65000 annually."
// ]
