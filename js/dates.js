//Magdalena Wollin
//Assignment Module 11

//STEP 1
let number1 = prompt("Enter a month:")
number1 = number1 * 1 + 1
let dateString = '2024-' + number1 //+ '-01'
console.log('dateString ' + dateString)
let date = new Date(dateString + "Z");
console.log('date ' + date)
let days = date.getDate()
console.log("Number of days is " + days)

//STEP 2

/* let date2 = prompt("Enter a date:")
console.log("Date entered " + date2)
date2 = new Date(date2 + "Z");
console.log("Date object " + date2)
let myMonth = date2.getMonth() + 1
console.log("Month is " + myMonth)
 */

//STEP 3
/* let date3 = prompt("Enter a date:")
console.log("Date entered " + date3)
date3 = new Date(date3 + "Z");
console.log("Date object " + date3)
let dow = date3.getDay() + 1

console.log("DOW is " + dow)
if (dow > 5) { 
    console.log('This date is a weekend')
} else {
    console.log('This date is NOT a weekend')
} */

//STEP 4
/* 
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let date4 = prompt("Enter a date:")
console.log("Date entered " + date4)
date4 = new Date(date4 + "Z");
console.log("Date object " + date4)
let dow = date4.getDay() 

console.log("Prior day is " + weekday[dow])
 */

//STEP 5

/* let date5 = new Date();
console.log("Date  " + date5)
strDate = date5.toString().charAt(0).toUpperCase()
console.log("First char Date is " + strDate)
 */