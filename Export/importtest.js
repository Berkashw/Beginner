import { polindromcheck } from '../Utils/polindromcheck.js'
import { getParameterCheck } from '../Utils/parametercheck.js'
import { getRandomNumber } from '../Utils/getrandomnumber.js'
console.log(polindromcheck('adaada'))

const someObject = {
  age: 11,
  boolparameter: false,
  anynumber: 55,
  somestring: 'string',
}

console.log(getParameterCheck(someObject, 'anynumber'))
console.log(getRandomNumber(10, 15))
