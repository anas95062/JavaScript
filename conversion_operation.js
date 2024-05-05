/************************CONVERSION**************************/
// let score = 76
// console.log(typeof score)
// let marks = "879"
// console.log(typeof marks)
// let marksInNumber = Number(marks) // conversion string to number
// console.log(typeof marksInNumber)

// let no = 786
// let strnum = String(no) // num to string conversion
// console.log(typeof strnum)

// NOTES
/*
"33" => 33  completely converted
"87xyz" => NaN
true => 1; false => 0 and vice versa
"" => false
"hitesh" => true
*/
/************************OPERATIONS**************************/
// let value = 8
// let negValue = -value
// console.log(negValue)

// console.log(3+5) // 8
// console.log(8-2) // 6
// console.log(3*5) // 15
// console.log(2**4) // 2 to the power 4 = 16
// console.log(8/2) // 4
// console.log(5%2) // remainder = 1

// let str1 = "Hello "
// let str2 = "Friends"
// let str3 = str1+str2
// console.log(str3)

// console.log("1" + 2); // output as a string -> 12
// console.log(1 + "2"); // output as a string -> 12
// console.log("1" + 2 + 3); // agar string pahle hai to sabhi ko string mein convert kar diya jayega 
// console.log(2 + 2 + "3"); // nahin to pahle jo operation hai wo perform hoga fir concatenation

// console.log(true) // true
// console.log(+true) // 1
// console.log(+"") // 0 
// let n1, n2;
// n1 = n2 = 7+8
// console.log(n1, n2)
let ctr = 7;
ctr++;
console.log(ctr)
let x = 6
const y = x++
const z = ++x
console.log(x,y,z) // 8 6 8
console.log(`x:${x}, y:${y}, z:${z}`) // x:8, y:6, z:8

let a = 8n
console.log(++a) // 9n
