"use strict";
function add(a, b, c) {
    return a + b;
}
console.log(add(1, 1));
const sub = (a, b, c = 10) => a - b - c;
console.log(sub(1, 1));
const mult = function (a, b) {
    return a * b;
};
console.log(mult(-1, 1));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log(add2(2, 3, ...[1, 2, 3, 4, 5]));
