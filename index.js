// 1. A JavaScript function that takes an array of strings and returns a new array with the length of each string.

function stringLength(strings) {
    return strings.map(str => str.length);
}

const strings = ["Sara", "Abel", "Mahder"];
console.log(stringLength(strings)); 

// 2. An array of numbers, write a function that filters out and returns only the even numbers.

function evenNumbers(numbers) {
    return numbers
    .filter(num => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(evenNumbers(numbers)); 

// 3. A function that takes an array of student objects with name and score properties

function organiseScores(students) {
    const studentsScore = students.filter(student => student.score > 75);
    return studentsScore ;
}

const students = [
    { name: "Abel", score: 80 },
    { name: "Betty", score: 50 },
    { name: "Saba", score: 90 },
];

console.log(organiseScores(students)); 


// 4. A function that accepts an array of numbers and returns a new array with each number squared

function squareNumbers(nums) {
    return nums.map(num => num ** 2); 
}

const nums = [7, 6, 3, 4];
console.log(squareNumbers(nums));

// 5. A JavaScript function that takes an array of mixed data types and returns a new array

function uppercaseStrings(elements) {
    return elements
        .filter(item => typeof item === "string")
        .map(str => str.toUpperCase());
}

const mixedArray = [4, "Hellen", "Now", 72, true, "map"];
console.log(uppercaseStrings(mixedArray)); 

