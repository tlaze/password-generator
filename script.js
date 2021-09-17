// Assignment Code

// Steps
// Make generatePassword function
// Prompt user for password criteria
//  a. Between 8 and 128 characters
//  b. lowercase, uppercase, special characters

// Validate the input 
// Generate Password based on criteria
// Display Password on the page


//Declares a temporary password Array
var tempPassword= [];
// Declares length of password array
var passArrayLength = 0;
// Password stored in an array with a variable length
var finalPassword = [passArrayLength];

// Array of each possible character
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];


// Generate a Password
function generatePassword(){
  passwordLength();
}

//Asks user for their desired password length and stores that value as the length of the finalPassword Array
function passwordLength(){
  
  //Repeats until imput criteria is met
  do{
    var characterCount = parseInt(window.prompt("How long would you like your password?\nChoose Between 8 and 128 Characters"));
    // Repeats prompt until user gives appropriate input
    if(!isNaN(characterCount) && characterCount > 7 && characterCount < 129){
      passArrayLength = characterCount;     //User input dictates length of Array
      characterQuestions();     //Goes to characterQuestions() function
    }
    // Validation for length of of password
    else{
      window.alert("Invalid Input. Try Again")
  }
  }
  while(isNaN(characterCount) || characterCount < 8 || characterCount > 128);
} 

 //Determines what characters the user wants and inputs them into the finalPassword Array 
function characterQuestions(){

  //Asks if user wants to include lowercase characters included   
  var lowerCaseQuestion = confirm("Would you like your password to contain lowercase characters?");
  if(lowerCaseQuestion === true){
    tempPassword = tempPassword.concat(lowerCaseLetters);   //Concats lowercase letters to tempPassword Array
    window.alert("Lowercase Characters Included");
  }
  else{
    window.alert("No Lowercase Characters Included");
  }
  
  // Asks if user wants to include uppercase characters included
  var upperCaseQuestion = confirm("Would you like your password to contain uppercase characters?");

  if(upperCaseQuestion === true){
    tempPassword = tempPassword.concat(upperCaseLetters);   //Concats uppercase letters to tempPassword Array
    window.alert("Uppercase Characters Included");

  }
  else{
    window.alert("No Uppercase Characters Included");
  }

  // Asks user if they want numeric characters included
  var numericQuestion = confirm("Would you like your password to contain numeric characters?");

  if(numericQuestion === true){
    window.alert("Numeric Characters Included");
    tempPassword = tempPassword.concat(numerals);    //Concats numerals to tempPassword Array
  }
  else{
    window.alert("No Numeric Characters Included");
  }

  // Asks user if they want special characters included
  var specialCharacterQuestion = confirm("Would you like your password to contain special characters?");

  if(specialCharacterQuestion === true){
    tempPassword = tempPassword.concat(specialCharacters);    //Concats numerals to tempPassword Array
    console.log(tempPassword);
    window.alert("Special Characters Included");

  }
  else{
    window.alert("No Special Characters Included");

  }
  // Repeats prompts until user includes atleast 1 character type
  if(lowerCaseQuestion === false && upperCaseQuestion === false && numericQuestion == false && specialCharacterQuestion === false){
    window.alert("You must include atleast 1 character type.");
    characterQuestions();
  }
  else{
    return;  //change to generatepassword function
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
