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
      console.log("Password is the correct length");                          //consoles if the password is the correct length
    
      var lowerCaseQuestion = confirm("Would you like your password to contain lowercase characters?");
      console.log(lowerCaseQuestion);                                         //consoles true if user wants lowercase characters and false if not
      if(lowerCaseQuestion === true){
        console.log("User wants lowercase");                                  //consoles that the user wants to use lowercase


      }
      else{
        console.log("User does not want to use lowercase");                   //consoles the user does not want to use lowercase
      }

      var upperCaseQuestion = confirm("Would you like your password to contain uppercase characters?");
      console.log(upperCaseQuestion);                                         //consoles true if user wants to use uppercase characters and false if not
      if(upperCaseQuestion === true){
        console.log("User wants uppercase");                                 //consoles that user wants to use uppercase
      
      
      }
      else{
        console.log("User doesn't want to use uppercase");                    //consoles that user doesn't want to use uppercase
      }
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

