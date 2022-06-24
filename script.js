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
  const passwordLength = window.prompt("How many characters would you like your password to be? It must be between 8 and 128 characters long.");
  if(passwordLength === null) return;
  if(!passwordLength){
    window.alert("Please put in a number!");
    return;
  }
  if(passwordLength < 8){
    window.alert("Password must be at least 8 characters long!");
    return;
  }else if(passwordLength > 128){
    window.alert("Password must be at most 128 characters long!");
    return;
  }

  var password = Array(passwordLength);
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const special = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  var charPool = "";

  var startFillIndex = 0;

  // Prompt for each type of character to be included and note whether it is or not
  // for each type of character included n, the first n elements in the password are randomly selected from respective pools
  if(window.confirm("Click OK to confirm adding lowercase characters.")){
    password[startFillIndex++] = selectRandom(lowercase);
    charPool += lowercase;
  }
  if(window.confirm("Click OK to confirm adding uppercase characters.")){
    password[startFillIndex++] = selectRandom(uppercase);
    charPool += uppercase;
  }
  if(window.confirm("Click OK to confirm adding numeric characters.")){
    password[startFillIndex++] = selectRandom(numeric);
    charPool += numeric;
  }
  if(window.confirm("Click OK to confirm adding special characters.")){
    password[startFillIndex++] = selectRandom(special);
    charPool += special;
  }

  // The remaining characters in the password are filled in from the pool of all selected characters
  for(var i = startFillIndex; i < passwordLength; i++) {
    password[i] = selectRandom(charPool);
  }

  shuffleArray(password);

  return password.join("");
}

// randomly select one element from an array and return it
function selectRandom(array) {
  var charIndex = Math.floor(Math.random() * array.length);
  return array[charIndex];
}

// randomly shuffle an array
function shuffleArray(array) {
  var randomMap = array.map(Math.random);
  array.sort(function(a,b){
    return randomMap[a]-randomMap[b];
  });
}