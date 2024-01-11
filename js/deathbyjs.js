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
function randomChars(text) {
    let newText4 = ""
    return newText4
}
//STEP 5
function longestCountry(text) {
    let newText5 = ""
    return newText5
}

function init() {
    let text = prompt("Enter a string:")
    //console.log("Entered string: " + text)

    //Step 1
    //console.log("Ordered string: " + orderString(text))

    //Step 2
    //let text = "this is just a test"
    let capitalize = capitalizeEachWord(text)
    console.log("Capitalize each word result : " + capitalize)

    //Step 3
    let count = 0
    count = countVowels(text)
    console.log("Total vowels in string is : " + count)
}

init()