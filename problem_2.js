// Employee Information
function employeeInformation(employees) {
    if (employees.length < 2) {
        return { secondEmployeeName: 'N/A', secondEmployeeDepartment: 'N/A' };
    }
    const { name: secondEmployeeName, department: secondEmployeeDepartment } = employees[1];
    return { secondEmployeeName, secondEmployeeDepartment };
}

// Average Salary
function averageSalary(employees) {
    const totalSalary = employees.reduce((total, { salary }) => total + salary, 0);
    const count = employees.length;
    const average = count > 0 ? totalSalary / count : 0;
    return average;
}

// Third Employee Info
function thirdEmployeeInfo(employees) {
    if (employees.length < 3) {
        return "Employee info not available";
    }
    const { name: thirdEmployeeName, age: thirdEmployeeAge, salary: thirdEmployeeSalary } = employees[2];
    const bonus = thirdEmployeeSalary * 0.10;
    const result = `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus.toFixed(2)}`;
    return result;
}

// Example usage
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 30000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 35000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];

console.log(employeeInformation(employees)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }
console.log(averageSalary(employees)); // Output: 45000
console.log(thirdEmployeeInfo(employees)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000.00"
