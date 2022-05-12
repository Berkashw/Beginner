//../Utils/parametercheck.js

const getParameterCheck = (defaultObject, parameter) => {
  if (defaultObject[parameter] != undefined) return true
  else return false
}

module.exports = getParameterCheck
