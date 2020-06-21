// Special characters
const spc = "`~!%^*()+-={}|[]:;'<>?,.";
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
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
      // minNumbers = functionArray.getNumbers();
      // baseline++;
    }else{
      console.log("- Numbers not selected for password combination.")
      }

  var lowCase = confirm("Do you require lower case letters?");
  if (lowCase === true){
    console.log("+ Selected lower case letters for password combination.")
    // minLowCase = functionArray.getLowCase();
    // baseline++;
    }else{
    console.log("- Lower case letters not selected for password combination.")
      }
      
  var upCase = confirm("Do you require upper case letters?");
  if (upCase === true){
    console.log("+ Selected upper case letters for password combination.")
    // minUpCase = functionArray.getUpCase();
    // baseline++;
    }else{
    console.log("- Lower case letters not selected for password combination.")
      }

  var spc = confirm("Are special characters required?");
  if (spc === true){
    console.log("+ Selected special characters for password combination.")
    // minSpc = functionArray.getSpc();
    // baseline++;
    }else{
    console.log("- Special characters not selected for password combination.")
    }


    //Baseline the character count
    var baseline = 0;

    // Establishing chosen characters

    var minNumbers = "";
    var minLowCase = "";
    var minUpCase = "";
    var minSpc = "";

    //We're going to force the user to input more than the number 8, or less than the number 128.
    //We're going to console log each choice to ensure characters are represented accurately.
    
    var functionArray = {
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
        return spc[Math.floor(Math.random() * spc.length)]
      }
    }



    if (numbers === true){
      minNumbers = functionArray.getNumbers();
      baseline++;
    }
    if (lowCase === true){
      baseline++;
      }
    if (upCase === true){
      minUpCase = functionArray.getUpCase();
      baseline++;
    }

    if (spc === true){
      minSpc = functionArray.getSpc();
      baseline++;
    }

  // We're going to pull random characters using fromCharCode, except special characters.
  // We will use an array for special characters.



  var magicPassword = "";

  //Let's start looping everyone in.
  for (let i = 0; i < userlength + - (baseline); i++) {
    var randomLoop = Math.floor(Math.random() * 4);

    magicPassword += randomLoop;
  }

  magicPassword += minNumbers;
  magicPassword += minLowCase;
  magicPassword += minUpCase;
  magicPassword += minSpc;

  //Presto Passwordo!
  console.log(magicPassword);
  return magicPassword;  

};


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