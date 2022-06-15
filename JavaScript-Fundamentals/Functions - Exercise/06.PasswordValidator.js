function passwordValidator(password) {
  function lenghtValid(word) {
    return word.length >= 6 && word.length <= 10;
  }
  function onlyLettersAndDigits(word) {
    for (let charNumIndex of word) {
      let charNum = charNumIndex.charCodeAt(0);
      if (
        !(charNum >= 48 && charNum <= 57) &&
        !(charNum >= 65 && charNum <= 90) &&
        !(charNum >= 97 && charNum <= 122)
      ) {
        return false;
      }
    }
    return true;
  }
  function atLeastTwoDigits(word) {
    let count = 0;
    for (let charNumIndex of word) {
      let charNum = charNumIndex.charCodeAt(0);
      if (charNum >= 48 && charNum <= 57) {
        count++;
      }
    }
    return count >= 2 ? true : false;
  }
  let lenghtIsValid = lenghtValid(password);
  let lettersAndDigits = onlyLettersAndDigits(password);
  let twoDigitsAbove = atLeastTwoDigits(password);

  if (lenghtIsValid && lettersAndDigits && twoDigitsAbove) {
    console.log("Password is valid");
  }
  if (lenghtIsValid === false) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (lettersAndDigits === false) {
    console.log("Password must consist only of letters and digits");
  }
  if (twoDigitsAbove === false) {
    console.log("Password must have at least 2 digits");
  }
}
passwordValidator("MyPass123");
