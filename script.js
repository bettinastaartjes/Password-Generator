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