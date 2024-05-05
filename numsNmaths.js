/******************************Numbers****************************/

// const score = 400
// console.log(score);

// const bal=new Number(200)
// console.log(bal); // [Number: 200]

// console.log(bal.toString()); // 200
// console.log(bal.toFixed(2)); // 200.00

// const newNum = 767.98867
// console.log(newNum.toPrecision(4)); // 768.0

// const nums = 100000000
// console.log(nums.toLocaleString()); // 10,00,00,000
// console.log(nums.toLocaleString('en-IN')); // 10,00,00,000

/******************************Mathematics****************************/
// maths library java script ke saath hoti hai by default.

// console.log(Math);
// console.log(Math.abs(-5)); // 5
// console.log(Math.round(3.7)); // 4 (even if 3.5 o/p is 4)
// console.log(Math.round(3.4)); // 3
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(8,7,5,3)); // 3
// console.log(Math.max(9,6,7,8)); // 9

// console.log(Math.random()); // values is always in b/w 0 & 1
// console.log((Math.random()*10) + 1);
// if we want value in b/w two numbers(i.e 10 and 20) then
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)

