//Magdalena Wollin
//Assignment Module 11

//STEP 1

let userName = prompt("Enter your name:")
console.log('your name is', userName)
let nameLength = userName.length
console.log(nameLength)
alert('The lenght of your name is ' + nameLength)


//STEP 2
/* 
userName = prompt("Enter your name:")
let userNumber = prompt("Enter numeric value:")
console.log('your name is', userName)
let letter = userName.slice(userNumber-1,userNumber)
console.log(letter)
alert('The letter for that position is ' + letter)
 */

//STEP 3
/* 
let firstName = prompt("Enter your first name:")
let lastName = prompt("Enter your last name:")
let fullName = firstName.concat(" ", lastName);
console.log(fullName)
alert('Your name is: ' + fullName)
 */

//STEP 4

/* let text = 'The quick brown fox jumps over the lazy dog'
let wordIndex = text.indexOf('fox')
console.log(wordIndex)
alert('Index of word fox is: ' + wordIndex)
 */

//STEP 5
/* 
let text5 = 'The quick brown fox jumps over the lazy fox'
let lastIndex = text5.lastIndexOf('fox')
console.log(lastIndex)
alert('Last index of word fox is: ' + lastIndex)
 */

//STEP 6
/* 
let text6 = 'The quick brown fox jumps over the lazy dog'
let fullName6 = prompt("Enter your full name:")
let newText = text6.replace('the lazy dog',fullName6)
console.log(newText)
alert(newText)
 */

//STEP 7
/* 
let text7 = 'The quick brown fox jumps over the lazy dog'
let userWord = prompt("Enter word to search for:")
let wordFound = text7.search(userWord)
console.log(wordFound)
alert('The word was found at position: ' + wordFound)
 */

//STEP 8
/* 
let old_string = 'The quick brown fox jumps over the lazy dog'
let textToExtract = 'the lazy dog'
let position = old_string.indexOf(textToExtract)
console.log('position ', position)
let textLength = textToExtract.length
console.log('text:Lenght ', textLength)
let new_string = old_string.substring(position,position + textLength).toUpperCase()
console.log(new_string)
alert('new_string: ' + new_string)
 */

//STEP 9
/* 
let text9 = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG    '
let trimmedText9 = text9.trim().toLowerCase()
alert('New trimmed lowercase is ' + trimmedText9 + '.') 
 */

//STEP 10
/* let text10 = 'the quick brown fox jumps over the lazy dog'
let capitalizeFirstLetter = text10.charAt(0).toUpperCase() + text10.slice(1);
alert(capitalizeFirstLetter) */
