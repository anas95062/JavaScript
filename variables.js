const accId = 87767;
let accEmail = "sariq@gmail.com";
var accPswd = "9090";
accCity = "Hyderabad";
let AccState;
/* Prefer not to use 'var'
because of issue in block scope and functional scope
*/

// accId = 9889;  not allowed.
accEmail = "Shukla@gmail.com";
accPswd = "9080";
accCity = "Jaipur";

// console.log(accId);
// console.log(accEmail);
// console.log(accPswd);
// console.log(accCity);

console.table([accId, accEmail, accPswd, accCity, AccState]) 