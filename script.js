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
  passwordLength();
}


function passwordLength(){
  
  // Prompts user for password length
  do{
    var characterCount = parseInt(window.prompt("How long would you like your password?\nChoose Between 8 and 128 Characters"));
    // Repeats prompt until user gives appropriate input
    if(!isNaN(characterCount) && characterCount > 7 && characterCount < 129){
      characterQuestions();
    }
    // Validation for length of of password
    else{
      window.alert("Invalid Input. Try Again")
  }
  }
  while(isNaN(characterCount) || characterCount < 8 || characterCount > 128);
  

  
function characterQuestions(){

    //Asks if user wants to include lowercase characters included   
    var lowerCaseQuestion = confirm("Would you like your password to contain lowercase characters?");
    if(lowerCaseQuestion === true){
      window.alert("Lowercase Characters Included");
    }
    else{
      window.alert("No Lowercase Characters Included");
    }

    // Asks if user wants to include uppercase characters included
    var upperCaseQuestion = confirm("Would you like your password to contain uppercase characters?");

    if(upperCaseQuestion === true){
      window.alert("Uppercase Characters Included");

    }
    else{
      window.alert("No Uppercase Characters Included");
    }

    // Asks user if they want numeric characters included
    var numericQuestion = confirm("Would you like your password to contain numeric characters?");

    if(numericQuestion === true){
      window.alert("Numeric Characters Included");

    }
    else{
      window.alert("No Numeric Characters Included");
    }

    // Asks user if they want special characters included
    var specialCharacterQuestion = confirm("Would you like your password to contain special characters?");

    if(specialCharacterQuestion === true){
      window.alert("Special Characters Included");

    }
    else{
      window.alert("No Special Characters Included");

    }
    // Repeats prompts until user includes a character type
    if(lowerCaseQuestion === false && upperCaseQuestion === false && numericQuestion == false && specialCharacterQuestion === false){
      window.alert("You must include atleast 1 character type.");
      characterQuestions();
    }
    else{
      return;  //change to generatepassword function
    }
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

