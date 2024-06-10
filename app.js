//  ---------------------------- Chapter 12 To 13 Assignment Start ---------------------------

// ------------------------------- Question # 01 ---------------------------------------------

var character = prompt("Enter a character:");

if (!isNaN(parseInt(character))) {
    console.log(character + " is a number.");
}
else if (character >= 'A' && character <= 'Z') {
    console.log(character + " is an uppercase letter.");
}
else if (character >= 'a' && character <= 'z') {
    console.log(character + " is a lowercase letter.");
}
else {
    console.log(character + " is neither a number nor a letter.");
}

// -------------------------------- This Task Completed Here ---------------------------------


// ------------------------------- Question # 02 ---------------------------------------------

var character = prompt("Enter a character (number or letter):");
var firstInteger = prompt("Enter the first integer:");
var secondInteger = prompt("Enter the second integer:");

if (firstInteger === secondInteger) {
    console.log("The two integers are equal.");
} else {
    var largerInteger = firstInteger > secondInteger ? firstInteger : secondInteger;
    console.log("The larger integer is: " + largerInteger);
}

// -------------------------------- This Task Completed Here ---------------------------------


// ------------------------------- Question # 03 ---------------------------------------------

var number = +prompt("Enter a number:");

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// -------------------------------- This Task Completed Here ---------------------------------


// ------------------------------- Question # 04 ---------------------------------------------

function isVowel(char) {
    char = char.toLowerCase();
    // Check if the character is a vowel
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}

var inputChar = prompt("Enter a character:");
var result = isVowel(inputChar);

console.log(result);

// -------------------------------- This Task Completed Here ---------------------------------


// ------------------------------- Question # 05 ---------------------------------------------

var correctPassword = "password123";
var enteredPassword = prompt("Enter your password:");

if (enteredPassword === "") {
    console.log("Please enter your password.");
} else if (enteredPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

// -------------------------------- This Task Completed Here ---------------------------------


// ------------------------------- Question # 06 ---------------------------------------------

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} 
else {
    greeting = "Good evening";
}
var time = +prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

// -------------------------------- This Task Completed Here ---------------------------------


// ------------------------------- Question # 07 ---------------------------------------------
                                                                                                                                                      
var time = +prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid time input.");
}

// -------------------------------- This Task Completed Here ---------------------------------

//  --------------------------- Chapter 12 To 13 Completed here ---------------------------------