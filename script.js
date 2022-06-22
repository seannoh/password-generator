// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(password){
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password based on a series of prompts to the user
function generatePassword() {
  var characters = "";
  var passwordLength = window.prompt("How many characters would you like your password to be?");
  if(passwordLength < 8){
    window.alert("Password must be at least 8 characters long!");
    return;
  }else if(passwordLength > 128){
    window.alert("Password must be at most 128 characters long!");
    return;
  }


}