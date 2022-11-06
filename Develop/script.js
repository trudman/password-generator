// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

var uppercaseCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  "-",
  "~",
  "`",
  "{",
  "}",
  "[",
  "]",
  "|",
  ":",
  ";",
  "<",
  ">",
  "?",
  "/",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  var userInput = window.prompt("How long would you like your password to be?");
  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    alert("Please enter a number");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }

  var wantsSpecialCharacters = confirm("Click OK to confirm using special characters.");
  var wantsNumbers = confirm("Click OK to confirm using numbers.");
  var wantsLowerCaseCharacters = confirm("Click OK to confirm using lower case characters.");
  var wantsUpperCaseCharacters = confirm("Click OK to confirm using upper case characters.");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
