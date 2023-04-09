// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){



var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*_-";
var passwordLength = 10;
var password = "";

 for (var i = 0; i < passwordLength; i++) {
//  console.log(characters[i])
var randomNumber = Math.floor(Math.random()* characters.length); 
 console.log (characters[randomNumber])
// password += characters.substring(randomNumber, randomNumber +1);
password = password + characters[randomNumber]
console.log(password, "password")
 }

}
// Write password to the #password input
function writePassword() {
  console.log("click") 
  console.log("Display Password " + password)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
