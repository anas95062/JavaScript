const arr1 = [4,5,1,3,6,2]
const arr2 = ["rahul", 4, 6, true, 0]
const arr3 = new Array(2,3,4,5)
// console.log(arr2[0]);

// Array Methods
// arr1.push(1)
// console.log(arr1);
// console.log(arr3.pop()); // popped last element of the array
arr1.sort()
// console.log(arr1);

arr1.unshift(0) // adds the start of the array
// arr3.shift() // removes the first element.
// console.log(arr3);

// console.log(arr1.includes(6)); // checks the value exist or not(true/false)
// console.log(arr1.indexOf(5)); // gives the index of the value , if not exist gives -1

// const newArr = arr1.join(); // change the array into string
// console.log(arr1);
// console.log(newArr);

/******************************Slice & Splice***************************/
// console.log("Original: ",arr1);
// const sub1 = arr1.slice(2,5) // subArray
// console.log("sub1: ",sub1); // 
// console.log("A: ",arr1);

// const sub2 = arr1.splice(1,3) // it manipulates the array
// console.log("sub2: ",sub2); // [ 1, 2, 3 ]
// console.log("B: ",arr1); // [ 0, 4, 5, 6 ]

const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // dc_heros pushed in marvel_heros as an element
// // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const allHeros = [...marvel_heros, ...dc_heros, ...arr1]
// console.log(allHeros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const other_Array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [1, 0]]]
// const realArray = other_Array.flat(Infinity);
// console.log(realArray);

// console.log(Array.isArray("string"));
// console.log(Array.from("string")); // string converted in array
// console.log(Array.from({name: "spiderman"}));// it will give empty array
/*bcos hame batana padega ki key ko convert karna hai ya value ko*/

// if we want to convert multiple values in an array then
let score1 = 100;
let score2 = 200;
let name = "arhan";
console.log(Array.of(score1, score2, name));