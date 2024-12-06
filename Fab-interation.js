var readline = require("readline-sync");
var n = readline.questionInt("Please input an integer?");
var count = 0;

var dis = IterativeFab(n);
console.log(dis);
console.log(dis > 384401000 ? ">" : "<");


function IterativeFab(n) {
    count++;
    if (n <= 1) {
        return 1;
    }
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++)
     {
        temp = a + b;
        a = b;
        b = temp;
        count++;
    }
}
console.log(count);
