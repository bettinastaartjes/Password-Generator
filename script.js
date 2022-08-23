// Assignment code here

function generatePassword() {
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var possibleCharacters = [];


// Get input and validate

numberOfCharacters = prompt ("Password length must be between 8-128 characters.");
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  return "Password length must be between 8-128 characters.";
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt ("That's not a number!");
}
else {
  alert("Your password will be " + numberOfCharacters + " characters long.");
}

hasLowercase = confirm("Do you want lowercase characters?");
if (hasLowercase) {
  var turnToLowercase = alert ("Your password will have lowercase characters.");
}
else {
  alert ("Your password won't have any lowercase characters.");
}

hasUppercase = confirm ("Do you want uppercase characters?");
if (hasUppercase) {
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
  return "You must select at least one character type for your password.";
};


//Grouping selected characters
if (hasLowercase) {
  possibleCharacters = possibleCharacters.concat (lowercaseList);
}
if (hasUppercase) {
  possibleCharacters = possibleCharacters.concat (uppercaseList);
}
if (hasNumbers) {
  possibleCharacters = possibleCharacters.concat (numberList);
}

if (hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat (symbolList);
}

// Pick random cards out of new pool for length of password
let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    // or finalPassword += possibleCharacters[rng];
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);