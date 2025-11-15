// An array stores multiple values in a single variable.
// Creating A

let number = [10, 30, 20, 40];
let mixed = ["Priyanshu", 21, true, null];

// Accessing & Updating Elem

let color = ["red", "pink", "yellow"];
console.log(color[1]);

color[2] = "green";
console.log(color);

// Common & important array method


// +push() Method
// Adds element at end


let cities = ["Etawah", "Agra", "Delhi"];
cities.push("Lucknow");
console.log(cities);

// ➖ pop()
// 👉 Removes from end

cities.pop();
console.log(cities);

//  shift()
// 👉 Removes from start

cities.shift();
console.log(cities);

// ➡️ unshift()
// 👉 Adds element at start

cities.unshift("Kanpur");
console.log(cities);


// Looping /Tranformation method


// 🔁 forEach()
// 👉 Performs a task on each element
// 👉 Does NOT return a new array

let num = [1, 2, 3, 4, 5];
num.forEach(n => console.log(n*2));

// map()
// 👉 Returns a new array after modification

let result = num.map(n => n*2);
console.log(result);

// 🔍 filter()
// 👉 Returns a new array with only elements that pass condition

let even = [1, 2, 3, 4, 5].filter(n => n%2 ===0);
console.log(even);


// 🧮 reduce()
// 👉 Reduces array → single value (sum, product, etc.)

let sum = [10, 20, 40, 50].reduce((Total,sum) => Total+sum);
console.log(sum);
