// 16. Prime number check
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log("16. Prime:", isPrime(7));

// 17. Sum of digits
function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log("17. Sum of digits:", sumOfDigits(123));

// 18. Reverse string (without reverse)
function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
console.log("18. Reverse:", reverseString("hello"));

// 19. Grade system
function getGrade(marks) {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else if (marks >= 50) return "C";
  else return "Fail";
}
console.log("19. Grade:", getGrade(78));

// 20. Calculator function
function calculator(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    default: return "Invalid operator";
  }
}
console.log("20. Calc:", calculator(10, 5, "*"));

// 21. Count vowels
function countVowels(str) {
  let count = 0;
  for (let ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) count++;
  }
  return count;
}
console.log("21. Vowels:", countVowels("JavaScript"));

// 22. Fibonacci series
function fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 1; i <= n; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
  }
}
console.log("22. Fibonacci:");
fibonacci(5);

// 23. Min & Max from array
function minMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}
console.log("23.", minMax([2, 5, 1, 9]));

// 24. Simple menu (switch-case)
function menu(a, b, choice) {
  switch (choice) {
    case 1: return a + b;
    case 2: return a - b;
    case 3: return a * b;
    case 4: return a / b;
    default: return "Invalid choice";
  }
}
console.log("24. Menu:", menu(8, 2, 3));

// 25. Armstrong number
function isArmstrong(num) {
  let temp = num;
  let digits = num.toString().length;
  let sum = 0;

  while (temp > 0) {
    let d = temp % 10;
    sum += d ** digits;
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}
console.log("25. Armstrong:", isArmstrong(153));
