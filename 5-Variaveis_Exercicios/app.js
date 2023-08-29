let A = B = C = 100, D = 1000

let a = 10, b = 20, c = a;
console.log(c);

let t = a;
a = b;
b = t;

console.log(a);
console.log(b);