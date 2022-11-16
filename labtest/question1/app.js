const calculator = require('./calculator');

let result1 = calculator.mulitplyTwoNumbers(6, 6);
let result2 = calculator.evenDoubler(4);
let result3 = calculator.evenDoubler(3);

console.log(`multiply 6 * 6 equals: ${result1}`);
console.log(`even double 4 equals: ${result2}`);
console.log(`even double 3 equals: ${result3}`);

calculator.mulitplyTwoNumbers(true, false);
calculator.evenDoubler(true);
