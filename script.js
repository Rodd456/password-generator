// Generate Password
function generatePassword() {
  // Declare variables inside the function
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = "!@#$%^&*(),.;:{}[]_-=+?~";
  let password = '';
  let length;
  let randomPassword = '';

  console.log("hello");

  // Start of pop-up questions
  length = window.prompt("How many characters would you like (8-128)?");

  while (length < 8 || length > 128 || isNaN(length) || length === null) {
    alert("That's an invalid number. Please enter a number between 8-128.");
    length = window.prompt("How many characters would you like (8-128)?");
  }

  // Ask for character types
  const hasLowerCase = window.confirm("Would you like lowercase letters?");
  const hasUpperCase = window.confirm("Would you like uppercase letters?");
  const hasNumbers = window.confirm("Would you like numbers?");
  const hasSymbols = window.confirm("Would you like special characters?");

  // Check if at least one character type is selected
  if (!(hasLowerCase || hasUpperCase || hasNumbers || hasSymbols)) {
    alert("Choose at least one character type.");
    return '';
  }

  // Concatenate selected character sets
  if (hasLowerCase) {
    password += lowerCase;
  }
  if (hasUpperCase) {
    password += upperCase;
  }
  if (hasNumbers) {
    password += numbers;
  }
  if (hasSymbols) {
    password += symbols;
  }

  // Generate random password
  const passwordArray = Array.from({ length }, () => password.charAt(Math.floor(Math.random() * password.length)));
  randomPassword = passwordArray.join('');

  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
