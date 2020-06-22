// Special characters
const specialChar = "!@#$%^&*()-_=+";
const generateButton = document.getElementById('generate')
generateButton.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  //Baseline the character count
  var baseline = 0;

  // Establishing chosen characters

  var minNumbers = "";
  var minLowCase = "";
  var minUpCase = "";
  var minSpc = "";

  // We're going to pull random characters using fromCharCode, except special characters.
  // We will use an array for special characters.
  var functionList = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpc: function() {
      return specialChar[Math.floor(Math.random() * specialChar.length)]
    }
  }

  //We're going to force the user to input more than the number 8, or less than the number 128.
  //We're going to console log each choice to ensure characters are represented accurately.

  var pwLength = prompt("Welcome to Magic Password. To create your magic password, please enter a password length of at least 8 and no more than 128 characters.");
  var userlength = parseInt(pwLength);
  console.log("Selected a password of " + userlength + " characters.");
  if (userlength < 8 ) {
    console.log("User input less than 8. Redirect to password prompt.");
    window.alert("You have entered an invalid length. Please try again");
    return generatePassword();                                               ;
  }
  if (userlength > 128 ) {
    console.log("User input less than 128. Redirect to password prompt.");
    window.alert("You have entered an invalid length. Please try again");
    return generatePassword();                                               ;
  }

  var numbers = confirm("Are numbers required?");
  if (numbers === true){
      console.log("+ Selected numbers for password combination.")
      minNumbers = functionList.getNumbers();
      baseline++;
    }else{
      console.log("- Numbers not selected for password combination.")
      }

  var lowCase = confirm("Do you require lower case letters?");
  if (lowCase === true){
    console.log("+ Selected lower case letters for password combination.")
    minLowCase = functionList.getLowCase();
    baseline++;
    }else{
    console.log("- Lower case letters not selected for password combination.")
      }
      
  var upCase = confirm("Do you require upper case letters?");
  if (upCase === true){
    console.log("+ Selected upper case letters for password combination.")
    minUpCase = functionList.getUpCase();
    baseline++;
    }else{
    console.log("- Lower case letters not selected for password combination.")
      }

  var spc = confirm("Are special characters required?");
  if (spc === true){
    console.log("+ Selected special characters for password combination.")
    minSpc = functionList.getSpc();
    baseline++;
    }else{
    console.log("- Special characters not selected for password combination.")
    }

  var magicPassword = "";
  

  //Let's start looping everyone in.
  for (let i = 0; i < (userlength - baseline); i++) {
    var randomLoop = Math.floor(Math.random() * 10);

    magicPassword += randomLoop;
  }

 
  magicPassword += minLowCase;
  magicPassword += minUpCase;
  magicPassword += minNumbers;
  magicPassword += minSpc;
  

  //Presto Passwordo!
  console.log(magicPassword);
  return magicPassword;  

}


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page