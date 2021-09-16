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
  
  // Prompts user for password length
  do{
    var characterCount = parseInt(window.prompt("How long would you like your password?\nChoose Between 8 and 128 Characters"));
    // Repeats prompt until user gives appropriate input
    if(!isNaN(characterCount) && characterCount > 7 && characterCount < 129){
      break
    }
    // Validation for length of of password
    else{
      window.alert("Invalid Input. Try Again")
  }
  }
  while(isNaN(characterCount) || characterCount < 8 || characterCount > 128);
  
  
  //Asks if user wants to include lower case letters     
  var lowerCaseQuestion = confirm("Would you like your password to contain lowercase characters?");
  
  if(lowerCaseQuestion === true){
    window.alert("Lower Case Letters Included");

  }
  else{
    window.alert("No Lower Case Letters Included");
  }




  var upperCaseQuestion = confirm("Would you like your password to contain uppercase characters?");
  console.log(upperCaseQuestion);                                         //consoles true if user wants to use uppercase characters and false if not
  if(upperCaseQuestion === true){
    console.log("User wants uppercase");                                 //consoles that user wants to use uppercase
  
  
  }
  else{
    console.log("User doesn't want to use uppercase");                    //consoles that user doesn't want to use uppercase
  }

  var specialCharacterQuestion = confirm("Would you like your password to contain special characters?");
  console.log(specialCharacterQuestion);                                         //consoles true if user wants to use special characters and false if not
  if(specialCharacterQuestion === true){
    console.log("User wants to use special characters");                  //consoles that user wants to use special characters
  
  
  }
  else{
    console.log("User doesn't want to use special characters");           //consoles that user doesn't want to use special characters
  }
}

  // return "Generated Password will go here"; 





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

