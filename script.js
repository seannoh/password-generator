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
  // Prompt for password length and check that it's between 8 and 128 character long
  var passwordLength = window.prompt("How many characters would you like your password to be? It must be between 8 and 128 characters long.");
  if(passwordLength < 8){
    window.alert("Password must be at least 8 characters long!");
    return;
  }else if(passwordLength > 128){
    window.alert("Password must be at most 128 characters long!");
    return;
  }

  // Prompt for whether to include each character type and add those character to a string
  var characters = "";
  if(window.confirm("Click OK to confirm adding lowercase characters.")){
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if(window.confirm("Click OK to confirm adding uppercase characters.")){
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(window.confirm("Click OK to confirm adding numeric characters.")){
    characters += "0123456789";
  }
  if(window.confirm("Click OK to confirm adding special characters.")){
    characters += " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  if(!characters){
    window.alert("No character types selected! Please select at least one.");
    return;
  }

  // Randomly select passwordLength number of characters from the pool of selected 
  // characters to generate a password
  var password = "";
  for(var i = 0; i < passwordLength; i++){
    var charIndex = Math.floor(Math.random() * characters.length);
    password += characters[charIndex];
  }

  return password;
}