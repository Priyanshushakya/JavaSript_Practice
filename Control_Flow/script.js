// if else concept & syntax

let marks = 75;

if (marks >= 90) {
    console.log("Grade:+A");
} else if (marks >= 80) {
    console.log("Grade:A");

} else if (marks >= 70) {
    console.log("Grade:B");

} else {
    console.log("Grade:C");

}

// switch statement 

let day = 2;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    default:
        console.log("So On..");

}



// Ternary Operator(?:)


//     Syntax:  condition ? valueIfTrue : valueIfFalse;

let age = 20;

let CanVote = age >= 18 ? "YEs" : "No";
console.log(CanVote);


// for of loop
// Used for iterating over values (arrays, strings, etc.)

let fruits = ["apple", "banana", "orange", "mango"];
for(const fruit of fruits){
    console.log("Fruit:", fruit);
}


// for...in Loop

// Used for iterating over object keys (property names)
const student = {
  name: "Priyanshu",
  age: 21,
  course: "MCA",
};

for (const key in student){
    console.log(key +":", student[key]);
    
}

