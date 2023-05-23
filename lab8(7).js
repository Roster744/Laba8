const prompt = require('prompt-sync')();
//7
const n = prompt('Please enter number');
var sum = 0; var term = 1;
function func(n) {
    for (let i = 1; i <= n; i++) {
        sum += term;
        term = term * 10 + 1;
    }
    return sum;
}
console.log(sum);
const res = func(n);
console.log("Answer", res);