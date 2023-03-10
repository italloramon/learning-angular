// String
let lname: string;
lname = "Ramon";

let newname = lname.toUpperCase();
console.log(newname);

let age: string;
age = "25.5";

// Number
let result = parseInt(age);
console.log(result)

// Boolean
let isValid: boolean;
isValid = true;
console.log(isValid);

// Array
let empList: string[];
empList = ["Itallo", "Ramon"];

let numList: number[];
numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let results = numList.filter((num) => num % 2 == 0);

let num = numList.find((num) => num === 2);

let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
console.log(num);
console.log(sum);

// Enum
const enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Red;

// Tuple
let swapNums: [firstNum: number, secondNum: number];

function swapNumbers(num1:number, num2:number): [number, number]{
    return [num2, num1];
}

swapNums = swapNumbers(10, 20);
console.log(swapNums[0]);

// Any
let department: any;
department = "IT";
department = 100;

