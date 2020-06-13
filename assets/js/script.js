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

// Utility function to turn user yes/no input into a boolean value.
var getYesNoValue = function(promptText) {
  while (true) { // Return conditions below will stop the loop.

    var choice = window.prompt(promptText + "\n\nEnter yes/no:");
    
    if (choice) {
      choice = choice.toLowerCase();

      // startsWith lets us accept partial entry like y/n.
      // Will also take 'ye' as a 'yes' answer, which I think is a reasonable assumption.
      if ("yes".startsWith(choice)) {
        return true;
      } else if ("no".startsWith(choice)) {
        return false;
      }
    }
  }
}

// Get user input about what the password should look like.
var collectPasswordCriteria = function() {
  pwLength = -1;
  useLowerCase = useUpperCase = useNumeric = useSpecial = false;

  while ((pwLength < 8) || (pwLength > 128)) {
    pwLength = parseInt(window.prompt("Please enter the desired password length:")) || 0;
  }

  while ((useLowerCase || useUpperCase || useNumeric || useSpecial) === false) {
    useLowerCase = getYesNoValue("Use lower case letters?");
    useUpperCase = getYesNoValue("Use upper case letters?");
    useNumeric = getYesNoValue("Use numbers?");
    useSpecial = getYesNoValue("Use special characters?")

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
