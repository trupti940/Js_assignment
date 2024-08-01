
// Combining Arrays
function combiningArrays(fruits, vegetables) {
    // Combine both arrays using the spread operator
    const groceries = [...fruits, ...vegetables];
    return groceries;
}

// Example usage
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

console.log(combiningArrays(fruits, vegetables));
// Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]


// Cloning Objects
function cloningObjects(person) {
    // Clone the person object using the spread operator
    const personCopy = { ...person };
    return personCopy;
}

// Example usage
const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person));
// Output: { name: "John", age: 30, address: "123 Main St" }


// Merging Objects
function mergingObjects(student, course) {
    // Merge the student and course objects using the spread operator
    const studentWithCourse = { ...student, ...course };
    return studentWithCourse;
}

// Example usage
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };

console.log(mergingObjects(student, course));
// Output: { name: "Alice", age: 20, courseName: "Math", teacher: "Mr. Smith" }



// Combining nested arrays
function combiningNestedArrays(array1, array2) {
    // Combine the nested arrays from both array1 and array2 using the spread operator
    const combinedArray = [...array1, ...array2];
    return combinedArray;
}

// Example usage
const array1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const array2 = [
    [7, 8],
    [9, 10],
    [11, 12]
];

console.log(combiningNestedArrays(array1, array2));
// Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
