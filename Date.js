/* JavaScript Date objects represent a single moment in time in a platform-independent format.

   Date objects encapsulate an integral number that represents milliseconds since the midnight
   at the beginning of January 1, 1970, UTC (the epoch).

   A JavaScript date is fundamentally specified as the time in milliseconds.

   The maximum timestamp representable by a Date object is slightly smaller than the 
   maximum safe integer (Number.MAX_SAFE_INTEGER, which is 9,007,199,254,740,991).

   A Date object can represent a maximum of ±8,640*10^12 milliseconds, or ±10^7 (one hundred million) days, relative to the epoch.

   Date object holding a timestamp value of NaN, which is an "Invalid Date".
*/
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString()); // Sun May 05 2024
// console.log(myDate.toLocaleDateString()); // 5/5/2024

// let date=new Date(2023, 0, 5)
// let date=new Date(2024, 4, 5, 12, 51)
let date=new Date("2024-08-15")
// console.log(date.toDateString());

let timeStamp = Date.now(); // used in designing quiz, poll, etc
// console.log(timeStamp);
// console.log(date.getTime());
// console.log(Date.now()); // aaj ki date millisecond me
// console.log(Math.floor(Date.now()/1000)); // second me

let newDate =new Date()
// console.log(newDate);
console.log(newDate.getMonth());

// newDate.toLocaleString('default',{
//     weekDay: "long",
// })
