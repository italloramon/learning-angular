function add(a: number, b: number, c?: number): number {
    return a + b;
}
console.log(add(1, 1));


const sub = (a: number, b: number, c = 10): number => a - b - c;
console.log(sub(1, 1));


const mult = function(a: number, b: number): number {
    return a * b;
};
console.log(mult(-1, 1));


function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0)
}
console.log(add2(2, 3, ...[1, 2, 3, 4, 5]))