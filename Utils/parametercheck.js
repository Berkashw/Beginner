const someObject = {
  age: 11,
  boolparameter: false,
  anyumber: 55,
  somestring: 'string',
}

const getParameterCheck = (defaultObject, parameter) => {
  if (defaultObject[parameter] != undefined) return true
  else return false
}
console.log(getParameterCheck(someObject, 'age'))
