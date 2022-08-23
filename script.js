// Assignment code here


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

  var userWantsNumbers = window.confirm("Do you want numbers in your password?")
  var userWantsSymbols = window.confirm ("Do you want symbols in your password?")
  var userWantsLowercase = window.confirm ("Do you want lowecase letters in your password?")
  var userWantsUppercase = window.confirm ("Do you want uppercase letters in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var optionsCart = [numberList]
  
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