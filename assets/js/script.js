// Assignment Code
var generateBtn = document.querySelector("#generate");
// Password Criteria.
var critera
var pwLength = -1;
var useLowerCase = null;
var useUpperCase = null;
var useNumeric = null;
var useSpecial = null;

// Character sets.
var charsetLowerCase = "abcdefghijklmnopqrstuvwxyz";
var charsetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsetNumeric = "0123456789";
var charsetSpecial = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var getYesNoValue = function(promptText) {
  while (true) {
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

var collectPasswordCriteria = function() {
  pwLength = -1;
  useLowerCase = useUpperCase = useNumeric = useSpecial = false;

  while ((pwLength < 8) || (pwLength > 128)) {
    pwLength = parseInt(window.prompt("Please enter the desired password length:", 16)) || 0;
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

// Collect
var generatePassword = function() {
  return "Hello world!";
};

// Write password to the #password input
function writePassword() {
  collectPasswordCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
