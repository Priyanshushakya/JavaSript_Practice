function sayHello(){
    console.log("Hello World!");
    
}
sayHello();
sayHello();

//function declaractoin

function add(a,b){
    return a+b;
}
console.log(add(34,6));

// parameter and return values

function greetUser(name){
    return "Hii my name is " + name +".";
}
let message = greetUser("Prianshu");
console.log(message);


// Arrow Function (ES6)

// Syntax

// const functionName = (parameters) => {
//   // code
//   return result;
// };



const square = (n) =>{
    return n*n;
};

console.log(square(3));

const cube = (m) => m*m*m;
console.log(cube(3));

// default Parameters
function greet(name = "Guest"){
    console.log("Hello, "+ name + "!");
}
greet("Priayanshu");
greet();


// 1. Write a function named 'calculateArea' that returns area of rectangle (length * width)
// 2. Write an arrow function 'isEven' that checks if a number is even or not
// 3. Use a callback function 'process' that takes a number and a function, and returns the result.


//1.

function calculateArea(length,width){
     return length*width;
}

console.log(calculateArea(2,5));


//2.

const isEven = (e)=> e%2===0;

console.log(isEven(2));
console.log(isEven(5));
console.log(isEven(8));


//3.

// Callback function examples
const double = (num) => num * 2;
const square2 = (num) => num * num;

// Higher-order function that uses callback
const process = (number, callback) => {
  return callback(number);
};

// Testing the process function
console.log(process(5, double)); // 10
console.log(process(4, square)); // 16
console.log(process(7, (n) => n + 3)); // 10 (inline callback)
