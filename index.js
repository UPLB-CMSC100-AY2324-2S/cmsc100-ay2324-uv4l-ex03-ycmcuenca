//function that returns a bool value if a string is not a number
function isNotNumber(char){
    if(typeof char == 'number') return false;
    return true;
}

//function that validates a password based on conditions
function validatePassword(inputPass, checkPass) {
  if (inputPass != checkPass) return false;     //condition 1: strings are equal
  else if (inputPass.length < 8) return false;  //condition 2: string length >= 8
  else {
    let numCheck = 0;   //checkers that will count instances of conditions
    let upCheck = 0;
    let lowCheck = 0;
    for (let i = 0; i < inputPass.length; i++) {
      if (Number(inputPass[i]) == inputPass[i]) numCheck += 1;  //a number is found
      else if (inputPass[i] == inputPass[i].toUpperCase() && isNotNumber(inputPass)) upCheck += 1;  //an uppercase character is found
      else if (inputPass[i] == inputPass[i].toLowerCase() && isNotNumber(inputPass)) lowCheck += 1; //a lowercase character is found
    }
    if (!(numCheck && upCheck && lowCheck)) return false; //check if all conditions met
  }
  return true;
}

//function to reverse a string
function reverseString(inputPass) {
  var reversed = "";
  for (let i = inputPass.length - 1; i > -1; i--) {
    reversed += inputPass[i]; //store characters of a string backwards to the empty string reversed
  }
  return reversed;
}

//function to store password in a key-value pair object
function storePassword(inputName, inputPass, checkPass) {
  var object = { name: inputName, newpassword: inputPass };
  if (validatePassword(inputPass, checkPass)) {
    object = { name: inputName, newpassword: reverseString(inputPass) };
  }
  return object;
}

console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));
