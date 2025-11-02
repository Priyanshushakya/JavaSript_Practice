const array = [2, 4, 6, 7, 8, 45, 90, 5]; 

const sumValue = array.filter((num) => num % 2 === 0);
const oddValue = array.filter((num) => num % 2 === 1);

console.log("Sum Value", sumValue);
console.log("Odd Value", oddValue);



const people = [
  { name: "Priyanshu Shakya", age: 21, address: "Jhansi, Uttar Pradesh" },
  { name: "Aarav Verma", age: 24, address: "Lucknow, Uttar Pradesh" },
  { name: "Neha Singh", age: 22, address: "Delhi, India" },
  { name: "Rohan Mehta", age: 25, address: "Mumbai, Maharashtra" },
  { name: "Ananya Gupta", age: 23, address: "Bhopal, Madhya Pradesh" },
  { name: "Karan Patel", age: 26, address: "Ahmedabad, Gujarat" },
  { name: "Simran Kaur", age: 20, address: "Chandigarh, Punjab" },
  { name: "Vivek Sharma", age: 27, address: "Jaipur, Rajasthan" },
  { name: "Ishita Das", age: 22, address: "Kolkata, West Bengal" },
  { name: "Manish Yadav", age: 28, address: "Varanasi, Uttar Pradesh" },
  { name: "Aditi Nair", age: 24, address: "Kochi, Kerala" },
  { name: "Rahul Sinha", age: 29, address: "Patna, Bihar" },
  { name: "Tanya Kapoor", age: 23, address: "Gurugram, Haryana" },
  { name: "Sarthak Jain", age: 25, address: "Indore, Madhya Pradesh" },
  { name: "Pooja Reddy", age: 21, address: "Hyderabad, Telangana" },
  { name: "Aman Ali", age: 26, address: "Lucknow, Uttar Pradesh" },
  { name: "Sneha Joshi", age: 22, address: "Pune, Maharashtra" },
  { name: "Ritika Ghosh", age: 24, address: "Kolkata, West Bengal" },
  { name: "Deepak Kumar", age: 27, address: "Ranchi, Jharkhand" },
  { name: "Meera Chauhan", age: 23, address: "Noida, Uttar Pradesh" }
];

const age_Filter= people.filter((user)=> user.age<=25)
console.log(age_Filter);

