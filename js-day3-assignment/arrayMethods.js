// Task 1: Student Marks (Average)
let marks = [80, 90, 70, 85, 95];

let average =
  marks.reduce((sum, m) => sum + m, 0) / marks.length;

console.log("Average Marks:", Math.floor(average));

// Task 2: Filter Even Numbers
let numbers = [1,2,3,4,5,6,7,8,9];

let evenNumbers = numbers.filter(num => num % 2 === 0);
//or using traditional function
// let evenNumbers = numbers.filter(function(num) {
//   return num % 2 === 0;
// });
console.log("Even Numbers:", evenNumbers);

// Task 3: Shopping Cart
let cart = {
  item: "Laptop",
  price: 45000,
  quantity: 2
};

let totalBill = cart.price * cart.quantity;
console.log("Total Bill:", totalBill);

// Task 4: Movie List
let movies = ["Inception", "Avatar", "Titanic"];

// Add one movie
movies.push("Interstellar");

// Remove last movie
movies.pop();

// Print final list
console.log("Final Movie List:");
for (let movie of movies) {
  console.log(movie);
}

// Task 5: User Profile JSON
let user = {
  name: "Aman",
  age: 21,
  course: "JS"
};

// Convert object to JSON
let jsonData = JSON.stringify(user);
console.log("JSON Data:", jsonData);

// Convert JSON back to object
let parsedUser = JSON.parse(jsonData);
console.log("Object Data:", parsedUser);

// Task 6: Find Max Without Built-in
let arr = [10, 40, 25, 80, 15];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Max Number:", max);

// Task 7: Transform Names using map()
let names = ["ram", "shyam", "mohan"];

let upperNames = names.map(name => name.toUpperCase());
console.log("Uppercase Names:", upperNames);
