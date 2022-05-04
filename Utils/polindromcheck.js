const reverseString = require('../Utils/reversestring.js')

const polindromcheck = (string) => string === reverseString(string)

module.exports = polindromcheck
