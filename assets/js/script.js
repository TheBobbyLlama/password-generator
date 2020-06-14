// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Criteria.
var critera
var pwLength;
var useLowerCase;
var useUpperCase;
var useNumeric;
var useSpecial;

// Character sets.
var charsetLowerCase = "abcdefghijklmnopqrstuvwxyz";
var charsetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsetNumeric = "0123456789";
var charsetSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Get user input about what the password should look like.
var collectPasswordCriteria = function() {
  pwLength = -1;
  useLowerCase = useUpperCase = useNumeric = useSpecial = false;

  while ((pwLength < 8) || (pwLength > 128)) {
    pwLength = parseInt(window.prompt("Please enter the desired password length:")) || 0;
  }

  while ((useLowerCase || useUpperCase || useNumeric || useSpecial) === false) {
    useLowerCase = window.confirm("Use lower case letters?");
    useUpperCase = window.confirm("Use upper case letters?");
    useNumeric = window.confirm("Use numbers?");
    useSpecial = window.confirm("Use special characters?")

    if ((useLowerCase || useUpperCase || useNumeric || useSpecial) === false) {
      window.alert("You must choose at least one type of character set.\nPlease try again.")
    }
  }
}

// Main password generation logic.
var generatePassword = function() {
  var charList = "";
  var result = "";

  collectPasswordCriteria();

  // Combine character sets into a unified list to choose from.
  if (useLowerCase) {
    charList += charsetLowerCase;
  }
  if (useUpperCase) {
    charList += charsetUpperCase;
  }
  if (useNumeric) {
    charList += charsetNumeric;
  }
  if (useSpecial) {
    charList += charsetSpecial;
  }

  // Safety loop for weeding out spaces at the beginning or end of the password.
  while (result.length < pwLength) {
    // Main generation loop.
    while (result.length < pwLength) {
      // Take a random character from charList and append it to our result.
      result += charList.charAt(charList.length * Math.random());
    }

    result = result.trim();
  }

  return result;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
