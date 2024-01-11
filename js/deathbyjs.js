//Magdalena Wollin
//Assignment Module 11

//STEP 1
function orderString(text) {
    textArray = text.split('').sort()
    let newText = ""
    let i=0
    let length = textArray.length
    for (i=0; i < length ; i++) {
       newText = newText + textArray[i]
    }
    return newText
}

//STEP 2
function capitalizeEachWord(text) {
    //console.log("n: " + newString)
    textArray = text.split(' ')
    let newText = ""
    let newString = ""
    let i=0
    let length = textArray.length
    for (i=0; i < length ; i++) {
        newWord = textArray[i]
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
        newText = newText.concat(" ", newWord);
        //console.log("newWord: " + newText)
        //console.log("n: " + newText)
    }
    return newText
}

//STEP 3
function countVowels(text) {
    let count = 0
    let vowels = ['a','e','i','o','u']
    let char = ""
    for (char of text) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}
//STEP 4
//note:implemented code from blog
function randomChars(number) {
    number = number * 1
    let newText4 = ""
    newText4 = Array(number+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, number)
    return newText4
}

//STEP 5
function longestCountry(text) {
    textArray = text.split(',')
    let word = ""
    word = textArray[0]
    let i=0
    let length = textArray.length
    for (i=0; i < length ; i++) {
        newWord = textArray[i]
        //console.log(newWord)
        if (newWord.length > word.length) {
            word = newWord
        }
    }
    return word
}

function init() {
    let text = prompt("Enter a string:")
    //console.log("Entered string: " + text)

    //Step 1
    console.log("Step 1. Ordered string: " + orderString(text))

    //Step 2
    //let text = "this is just a test"
    let capitalize = capitalizeEachWord(text)
    console.log("Step 2. Capitalize each word result : " + capitalize)

    //Step 3
    let count = 0
    count = countVowels(text)
    console.log("Step 3. Total vowels in string is : " + count)

    //Step 4
    let number4 = prompt("Enter length: ")
    let text4 = ""
    text4 = randomChars(number4)
    console.log("Random chars: " + text4)

    //Step 5
    let countries = prompt("Enter countries list separated by comma ")
    let longest = ""
    longest = longestCountry(countries)
    console.log("Longest country name is " + longest)
}

init()