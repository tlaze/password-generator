// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Generate a Password
function generatePassword(){
  console.log("Button Clicked");

  var characterCount = prompt("How many characters would you like your password?:");
  console.log("Number of characters is " + characterCount);


  return "Generated Password will go here";
}



// Steps
// Make generatePassword function
// Prompt user for password criteria
//  a. Between 8 and 128 characters
//  b. lowercase, uppercase, special characters
// Validate the input 
// Generate Password based on criteria
// Display Password on the page
