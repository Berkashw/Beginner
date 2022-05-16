const getRandomNumber = require('./getrandomnumber')

const getRandomString = (length) => {
  var randomString = ''
  for (i = 0; i < length; i++) {
    randomString += String.fromCharCode(getRandomNumber(40, 100))
  }
  return randomString
}
console.log(getRandomString(8))
