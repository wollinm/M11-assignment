//Magdalena Wollin
//Assignment Module 11

//STEP 1

let userNumber = prompt("Enter a number:")
userNumber = + userNumber; 
if (userNumber < 0) { 
    userNumber = userNumber * -1 
}
console.log(userNumber)


//STEP 2
/* 
let userFloatingNumber = prompt("Enter a Floating point value:")
userFloatingNumber = Math.round(userFloatingNumber)
console.log('Round up floating number is: ' + userFloatingNumber)
 */

//STEP 3

/* let userFloatingNumber = prompt("Enter a Floating point value:")
userFloatingNumber = Math.floor(userFloatingNumber)
console.log('Round up floating number is: ' + userFloatingNumber)
 */

//STEP 4
/* 
let stringArray = prompt("Enter 5 numbers separated by comma ")
let myNumberArray = []
console.log('Numbers entered' + stringArray)
const userArray = stringArray.split(",");
length = userArray.length
console.log('lenght of array ' + length)
console.log('Numbers entered' + userArray)
for (i=0; i < length ; i++) {
    console.log(i + ' ' + userArray[i])
    myNumberArray[i] = userArray[i] * 1
}
console.log('Ordered list ' + myNumberArray)
myNumberArray = myNumberArray.sort()

console.log('Max number is ' + myNumberArray[length-1]);
console.log('Min number is ' + myNumberArray[0]); 
*/

//STEP 5
/* let userNumber5 = prompt("Enter a number:")
userNumber5 = userNumber5 * 1
let squareNumber = userNumber5 * userNumber5
console.log('Square is ' + squareNumber)
 */