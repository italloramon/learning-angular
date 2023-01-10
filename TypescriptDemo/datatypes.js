"use strict";
// String
let lname;
lname = "Ramon";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = "25.5";
// Number
let result = parseInt(age);
console.log(result);
// Boolean
let isValid;
isValid = true;
console.log(isValid);
// Array
let empList;
empList = ["Itallo", "Ramon"];
let numList;
numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let results = numList.filter((num) => num % 2 == 0);
let num = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(results);
console.log(num);
console.log(sum);
let c = 0 /* Color.Red */;
// Tuple
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums[0]);
// Any
let department;
department = "IT";
department = 100;
