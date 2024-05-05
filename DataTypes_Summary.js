// PRIMITIVE 
/*
1. String  2. Number  3. Boolean  4. null
5. undefined  6. symbol  7. BigInt
*/

const score = 100
const value = 100.6

const isLoggedIn = false
const outSide = null;
let userEmail; // means userEmail = undefined. 

const id = Symbol('565')
const anotherId = Symbol('565')

console.log(id === anotherId);  //false

const bigNumber = 98765432121489780n 

// REFERENCE(NON PRIMITIVE) -> return type is 'function'.
/* 1. Array  2. Objects  3. Functions */

const heros = ["shaktiman", "naagraj", "doga"] // Array

let myObj = {  // Objects
    name: "shahrukh",
    age: 56,
}

// function is also treated as variable in javaScript.
const myFunction = function(){
    console.log("Hello World!!!");
}
console.log(myObj);
console.log(typeof anotherId);

/**************************Memory Uses**************************/
// 1. Stack --> used in primitive data type.
// (jab bhi stack memory use hoti hai to jo variable declare karte hain uski copy hame milti hai)
// 2. Heap --> used in non-primitive data type.
// (aur jab bhi heap memory use hoti hai to wahan se hame reference milta hai object ka)

let YTname = "hiteshdotcom"
let anothername = "YTname"
anothername = "chaiaurcode"
console.log(anothername);
console.log(YTname);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
