// problem 10
const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
        math: { teachers: 5, students: 150 },
        science: { teachers: 4, students: 120 },
        history: { teachers: 3, students: 100 },
        english: { teachers: 4, students: 138 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
        { name: "Alice", className: "Grade 5", scores: { math: 95, science: 88, history: 85, english: 92 } },
        { name: "Bob", className: "Grade 4", scores: { math: 88, science: 78, history: 92, english: 85 } },
        { name: "Charlie", className: "Grade 5", scores: { math: 88, science: 90, history: 78, english: 88 } },
        { name: "Diana", className: "Grade 4", scores: { math: 92, science: 85, history: 88, english: 90 } },
    ]
};

function countCalculation(school) {
    const {
        departments: {
            math: { teachers: mathTeachersCount, students: mathStudentsCount },
            history: { teachers: historyTeachersCount, students: historyStudentsCount }
        }
    } = school;
    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
}

console.log(countCalculation(school));
// Output: { mathTeachersCount: 5, historyTeachersCount: 3, mathStudentsCount: 150, historyStudentsCount: 100 }


//problem 11
function findTopStudent(school, courseName) {
    const { students } = school;
    let topStudent = students[0];

    for (const student of students) {
        if (student.scores[courseName] > topStudent.scores[courseName]) {
            topStudent = student;
        }
    }
    return topStudent;
}

console.log(findTopStudent(school, 'math'));
// Output: { name: 'Alice', className: 'Grade 5', scores: { math: 95, science: 88, history: 85, english: 92 } }


//problem 12
function addNewDept(school, newDepartment) {
    return {
        ...school,
        departments: {
            ...school.departments,
            ...newDepartment
        }
    };
}

const newDepartment = { art: { teachers: 2, students: 50 } };
console.log(addNewDept(school, newDepartment));
/*
Output: {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
        math: { teachers: 5, students: 150 },
        science: { teachers: 4, students: 120 },
        history: { teachers: 3, students: 100 },
        english: { teachers: 4, students: 138 },
        art: { teachers: 2, students: 50 }
    },
    courses: ["math", "science", "history", "english"],
    students: [
        { name: "Alice", className: "Grade 5", scores: { math: 95, science: 88, history: 85, english: 92 } },
        { name: "Bob", className: "Grade 4", scores: { math: 88, science: 78, history: 92, english: 85 } },
        { name: "Charlie", className: "Grade 5", scores: { math: 88, science: 90, history: 78, english: 88 } },
        { name: "Diana", className: "Grade 4", scores: { math: 92, science: 85, history: 88, english: 90 } }
    ]
}
*/


//problem 13
function highestStudentCountDepartment(school) {
    const { departments } = school;
    let maxStudents = 0;
    let highestDept = '';

    for (const [deptName, { students }] of Object.entries(departments)) {
        if (students > maxStudents) {
            maxStudents = students;
            highestDept = deptName;
        }
    }
    return highestDept;
}

console.log(highestStudentCountDepartment(school)); // Output: 'math'


//problem 14
function generateGreeting(name, language = 'English') {
    const greetings = {
        English: "Hello",
        Spanish: "Hola",
        French: "Bonjour"
    };
    return `${greetings[language]}, ${name}!`;
}

console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Output: "Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"

