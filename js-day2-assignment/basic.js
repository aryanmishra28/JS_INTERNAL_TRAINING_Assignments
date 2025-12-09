// =========================
// Part A: Basic
// =========================

// 1. Sum of two numbers
let a = 10, b = 20;
console.log("1. Sum:", a + b);

// 2. Print "Hello <name>"
let name = "Aryan";
console.log("2. Hello", name);

// 3. Even / Odd check
let num = 7;
console.log("3.", num % 2 === 0 ? "Even" : "Odd");

// 4. Celsius → Fahrenheit
let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log("4. Fahrenheit:", fahrenheit);

// 5. Max among 3 numbers
let x = 10, y = 40, z = 30;
console.log("5. Max:", Math.max(x, y, z));

// 6. Find string length
let str = "JavaScript";
console.log("6. Length:", str.length);

// 7. Toggle boolean
let isOn = true;
isOn = !isOn;
console.log("7. Toggle:", isOn);

// 8. Concatenate strings
let s1 = "Hello", s2 = "World";
console.log("8.", s1 + " " + s2);

// 9. Positive / Negative / Zero
let n = -5;
if (n > 0) console.log("9. Positive");
else if (n < 0) console.log("9. Negative");
else console.log("9. Zero");

// 10. var / let / const example
var v = 1;
let l = 2;
const c = 3;
console.log("10.", v, l, c);

// 11. Multiplication table
let table = 5;
console.log("11. Table of 5");
for (let i = 1; i <= 10; i++) {
  console.log(`${table} x ${i} = ${table * i}`);
}

// 12. Sum of first 10 natural numbers
let sum = 0;
for (let i = 1; i <= 10; i++) sum += i;
console.log("12. Sum:", sum);

// 13. Switch-case → day name
let day = 3;
switch (day) {
  case 1: console.log("13. Monday"); break;
  case 2: console.log("13. Tuesday"); break;
  case 3: console.log("13. Wednesday"); break;
  default: console.log("13. Invalid day");
}

// 14. Function → Factorial
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  return fact;
}
console.log("14. Factorial:", factorial(5));

// 15. Voting eligibility
function canVote(age) {
  return age >= 18 ? "Eligible" : "Not Eligible";
}
console.log("15.", canVote(20));