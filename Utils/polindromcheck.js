const reverseString = require('../Utils/reversestring.js')

function polindromcheck(string) {
  return string === reverseString(string)
}

module.exports = polindromcheck
