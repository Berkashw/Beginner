const polindromcheck = require('../Utils/polindromcheck.js')
const getParameterCheck = require('../Utils/parametercheck.js')
const getRandomNumber = require('../Utils/getrandomnumber.js')
console.log(polindromcheck('adaada'))

const someObject = {
  age: 11,
  boolparameter: false,
  anynumber: 55,
  somestring: 'string',
}

console.log(getParameterCheck(someObject, 'anynumber'))
console.log(getRandomNumber(10, 15))
