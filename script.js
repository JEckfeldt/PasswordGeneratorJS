document.getElementById('generate').addEventListener('click', () => {

  //get length and validate it
  let length = parseInt(prompt("how long do you want your password?"))
  if (length < 8 || length > 128 || isNaN(length)) {
    alert('Please input a number between 8 and 128')
    return
  }

  //get character sets
  let lowerCase = confirm("lower case?")
  let upperCase = confirm("upper case?")
  let nums = confirm("nums?")
  let specChars = confirm("special characters?")

  //validate sets
  if (!lowerCase && !upperCase && !nums && !specChars) {
    alert('Select at least one character set')
    return
  }

  //arrays for character sets
  let lowerArray = "abcdefghijklmnopqrstuvwxyz"
  let upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numArray = "0123456789"
  let specArray = "!@#$%^&*()"
  let chosenArray = ""
  let password = ""

  //create an array depending on user choices
  //also insert a character of that type to guarantee at least one
  if (lowerArray) {
    chosenArray += lowerArray
    password += lowerArray[Math.floor(Math.random() * lowerArray.length)]
  }
  if (upperArray) {
    chosenArray += upperArray
    password += upperArray[Math.floor(Math.random() * upperArray.length)]
  }
  if (numArray) {
    chosenArray += numArray
    password += numArray[Math.floor(Math.random() * numArray.length)]
  }
  if (specArray) {
    chosenArray += specArray
    password += specArray[Math.floor(Math.random() * specArray.length)]
  }

  //generate password based on prompts
  for (let i = password.length; i < length; i++) {
    password += chosenArray[Math.floor(Math.random() * chosenArray.length)]
  }

  //display password
  let passwordText = document.getElementById("password")
  passwordText.textContent = password

})
