// Assignment Code
var generateBtn = document.querySelector("#generate");
var atleastOneTypeSelected = false; //flag used to make sure atleast one constraint is selected

// Create an object to hold the password constraints chosen by user
var passwordConstraints = {
  includeUpper: false,
  includeLower: false,
  includeNumbers: false,
  includeSpecial: false,
  passwordLength: 0,
}

//Create variables to hold all possible data values for each constraint type
var upperChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars ="abcdefghijklmnopqrstuvwxyz";
var numbers ="1234567890";
var specialChars ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


//For each type, Get the data in arrays using split
upperChars.split("");
lowerChars.split("");
numbers.split("");
specialChars.split("");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var pwd ="";

    getPasswordConstraints(); // Function to show different prompts, validate them and fill up the passwordConstraints object 
    console.log(passwordConstraints);
    
    for ( var i=0; i<passwordConstraints.passwordLength; i++) {

        if (passwordConstraints.includeLower==true) {
          pwd += lowerChars[Math.floor(Math.random() * lowerChars.length)];

        }

        if (passwordConstraints.includeUpper==true) {
          pwd += upperChars[Math.floor(Math.random() * upperChars.length)];

        }

        if (passwordConstraints.includeSpecial==true) {
          pwd += specialChars[Math.floor(Math.random() * specialChars.length)];

        }

        if (passwordConstraints.includeNumbers==true) {
          pwd += numbers[Math.floor(Math.random() * numbers.length)];

        }

    }

return pwd.substr(1,passwordConstraints.passwordLength);
}

//function that get the password length from user. Validates user input in a loop until acceptable values are entered.
function getPasswordLength() {

    var inRange = false;
    var passLength = 0;

    while (inRange == false) {

      
      passLength= prompt("Enter the length of the password between 8 to 128");

      if (passLength > 8 && passLength < 128) {
        inRange = true;
      }
      else confirm("Not a valid input. Enter only a numeric value between 8 & 128.. lets try again");
    }

return passLength;
}

//Function that shows a custom message prompt add validates the Y/N input provided by user.
 function getSelection(message) {
 
  var optionSelected = false;
  var response =false;
 
  while (optionSelected == false) {
 
      response = prompt(message); 
      if (response.toUpperCase() == 'Y')  {
        optionSelected= true;
        response = true;
      }
      else if (response.toUpperCase() == 'N') {
        optionSelected= true;
        response = false;
      }
      else confirm ("Not a valid input. Enter a Y/N value only..lets try again");
  }
 
 return response;
 
 }



//function that populates the PasswordConstraints Object with validated user selection. Loops until atleast one constaint selected 
function getPasswordConstraints() {


  passwordConstraints.passwordLength= getPasswordLength();
  do {
      
      atleastOneTypeSelected=false; //reset previous selections
      
      passwordConstraints.includeUpper= getSelection("Do you want the password to contain upper cases? (Y/N)");
      passwordConstraints.includeLower= getSelection("Do you want the password to contain lower cases? (Y/N)");
      passwordConstraints.includeNumbers= getSelection("Do you want the password to have numbers? (Y/N)");
      passwordConstraints.includeSpecial= getSelection("Do you want the password to have special characters? Y/N");

      if (passwordConstraints.includeLower ==true || passwordConstraints.includeUpper==true || passwordConstraints.includeNumbers==true || passwordConstraints.includeSpecial==true) {
            atleastOneTypeSelected = true;
          }
      else 
        confirm ('You must select atleast one of the constraints.. lets do this again');

  } while (atleastOneTypeSelected == false);

}