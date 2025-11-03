// Spread operator(...) is used to  expand array or object into individual element - useful for copying , merging , or passing data flexible.


// Combine arrays

let arr1 = [1,2,3]
let arr2 = [4,5,6]

const combined = [...arr1,...arr2]
console.log(combined);


//copy an array

let numbers = [7,8,9,11]
const copy =[...numbers]

console.log(copy);

//add Elements in between

const arr3 =[2,3]
const arr4 = [5,6]

const result = [1,...arr3,4,...arr4]
console.log(result);

// Spread in Objects (ES6 Feature)
// Example 1 — Merge Objects

const user ={name : "Priyanshu"};
const info = {age: 21, city: "Etawah"};

const profile ={...user, ...info}
console.log(profile);
