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
  
  //We're going to force the user to input more than the number 8, or less than the number 128.
  //We're going to console log each choice to ensure characters are represented accurately.

  var pwLength = prompt("Welcome to Magic Password. To create your magic password, please enter a password length of at least 8 and no more than 128 characters.");
  var userlength = parseInt(pwLength);
  console.log("Selected a password of " + userlength + " characters.");
  if (userlength < 8 ) {
    console.log("User input less than 8. Redirect to password prompt.");
    window.alert("You have entered an invalid length. Please try again");
    return generatePassword();                                               ;
  }  else if (userlength > 128 ) {
    console.log("User input less than 128. Redirect to password prompt.");
    window.alert("You have entered an invalid length. Please try again");
    return generatePassword();                                               ;
  } else if (userlength === "" || isNaN(userlength)) {
    console.log("Your input was invalid. Please try again.");
    window.alert("Input was invalid. Please try again");
    return generatePassword();                                               ;
  } 

  var numChar= "";
  var lowcaseChar= "";
  var upcaseChar= "";
  var specialChar= "";
  var passChar= "";

  var numbers = confirm("Are numbers required?");
  if (numbers === true){
      console.log("+ Selected numbers for password combination.")
	  var numChar= "0123456789";
    }else{
      console.log("- Numbers not selected for password combination.")
    }

  var lowCase = confirm("Do you require lower case letters?");
  if (upCase === true){
      console.log("+ Selected lower case letters for password combination.")
	  var lowcaseChar = "abcdefghijklmnopqrstuvwxyz";
    }else{
      console.log("- Lower case letters not selected for password combination.")
    }
      
  var upCase = confirm("Do you require upper case letters?");
  if (upCase === true){
      console.log("+ Selected upper case letters for password combination.")
	  var upcaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }else{
      console.log("- Lower case letters not selected for password combination.")
    }

  var spc = confirm("Are special characters required?");
  if (spc === true){
      console.log("+ Selected special characters for password combination.")
	  var specialChar = "!@#$%^&*()";
    }else{
      console.log("- Special characters not selected for password combination.")
    }

  if (spc === false && upCase === false && upCase === false && numbers === false){
    window.alert("You answered No to all criteria. Please try again.");
  }
	
  passChar += numChar;
  passChar += lowcaseChar;
  passChar += upcaseChar;
  passChar += specialChar;
  
  var magicPassword = "";

  //Let's generate and mix it up.
  var randPassword = Array(userlength).fill(passChar).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');

    magicPassword += randPassword;

  //Presto Passwordo!
  console.log(magicPassword);
  return magicPassword;  

}