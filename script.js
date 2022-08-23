// Assignment code here

function generatePassword () {
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var otherCharacters [];


// Get input and validate

numberOfCharacters = prompt ("Password length must be between 8-128 characters.");
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  return "Password length must be between 8-128 characters.";
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt ("That's not a number!");
}
else {
  alert("Your password will be " + numberOfCharacters + "characters long.");
}

hasLowercase = confirm("Do you want lowercase characters?");
if (hasLowerCase) {
  var turnToLowercase = alert ("Your password will have lowercase characters.");
}
else {
  alert ("Your password won't have any lowercase characters.");
}

hasUppercase = confirm ("Do you want uppercase characters?");
if (hasUpperCase) {
  alert ("Your password will have uppercase characters.");
}
else {
  alert ("Your password won't have any uppercase characters.");
}

hasNumbers = confirm ("Do you want to include numbers in your password?");
if (hasNumbers) {
  alert("Your password will have numbers.");
}
else {
  alert ("Your password won't have any numbers.");
}

hasSpecialCharacters = confirm ("Do you want any special characters in your password?");
if (hasSpecialCharacters) {
  alert("Your password will have special characters.");
}
else {
  alert ("Your password won't have any special characters.");
}

if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecialCharacters === false) {
  return "You must select at least one character type for your password."
}
};


//Grouping selected characters
if (hasLowercase) {
  possibleCharacters = possibleCharacters.concat (lowercaseList);
}
if (hasUpperCase) {
  possibleCharacters = possibleCharacters.contact (uppercaseList);
}
if (hasNumbers) {
  possibleCharacters = possibleCharacters.contact {numberList};
}

if (hasSymbols) {
  possibleCharacters = possibleCharacters.contact {symbolList};
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var userInput = window.prompt ("Choose the length of your password.")
  var passwordLength = parseInt (userInput)

  if (isNaN(passwordLength)) {
    window.alert("Thats not a number!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8-128 characters.")
    return
  }
  //Number Characters
  var userWantsNumbers = window.confirm("Do you want numbers in your password?")
  //Symbol Characters
  var userWantsSymbols = window.confirm ("Do you want symbols in your password?")
  //Lowercase Characers
  var userWantsLowercase = window.confirm ("Do you want lowecase letters in your password?")
  //Uppercase Characters
  var userWantsUppercase = window.confirm ("Do you want uppercase letters in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var optionsCart = []
  
  if (userWantsNumbers === true) {
    optionsCart.push (numberList)
  }
  if (userWantsSymbols === true) {
    optionsCart.push (symbolList)
  }
  if (userWantsLowercase === true) {
    optionsCart.push (lowercaseList)
  }

  if (userWantsUppercase === true) {
    optionsCart.push (uppercaseList)
  }

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
}

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//// 1. We need to prompt the user for the password criteria
  // a. Password length, between 8-128 characters
  // b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Geberate oasswird ivased ib critera
// 4. Display the password to the page (return)

//