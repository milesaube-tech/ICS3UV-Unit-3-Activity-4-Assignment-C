/**
 * @author Miles Aube
 * @version 1.0.0
 * @date 2025-12-04
 * @fileoverview Determines life stage based on name, age, and student status.
 */

// variables
let Name: string = "";
let ageString: string = "";
let age: number = 0;
let isStudentString: string = "";
let isStudent: boolean = false;

// input
Name = prompt("Enter your name: ") || "";
ageString = prompt("Enter your age: ") || "0";
age = parseInt(ageString);

isStudentString = prompt("Are you a student? (true/false): ") || "false";
isStudent = isStudentString.toLowerCase() === "true";

// processing + output
if (isStudent && age >= 13 && age <= 19) {
  console.log(`Student ${name} is a teenager.`);
} else if (isStudent && age >= 5 && age <= 12) {
  console.log(`Student ${name} is a child.`);
} else if (!isStudent && age >= 20 && age <= 30) {
  console.log(`${name} is a young adult.`);
} else {
  console.log(`${name} is in a different life stage.`);
}

console.log("\nDone.");