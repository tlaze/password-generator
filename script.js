// Assignment Code

// Steps
// Make generatePassword function
// Prompt user for password criteria
//  a. Between 8 and 128 characters
//  b. lowercase, uppercase, special characters
// Validate the input 
// Generate Password based on criteria
// Display Password on the page



// Generate a Password
function generatePassword(){
  console.log("Button Clicked");                                              //consoles when button is clicked

  // Prompts user for number of characters in their password
  var characterCount = parseInt(prompt("How many characters would you like your password?"));
  
  
  console.log("Number of characters is " + characterCount);                   //writes out what the user typed in the prompt

  if (!isNaN(characterCount)){
    console.log("It's a number");                                             //consoles if the user entered an Integer              
    if(characterCount > 7 && characterCount < 129){
      console.log("Password is the correct length");
    }
  }

  // return "Generated Password will go here"; 
}





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

