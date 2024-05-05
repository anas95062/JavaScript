// console.log(2>1) //true
// console.log(2<1) // false
// console.log(2>=1) // true
// console.log(2==1) // false
// console.log(2!=1) // true

// console.log("2" > 1); //true(yahan converson ho jata hai)
// console.log(null > 0) // false 
// console.log(null == 0) // false
// console.log(null >= 0) // true
/*
equality check(==) and comparison(>, <, >=, <=) works differently
comparisons convert null to a number, treating it as 0.
that's why (null >= 0) is true and (null > 0) is false.
*/
console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false

// '===' called Strict check.
console.log("2" === 2) // false (data types must be same)
