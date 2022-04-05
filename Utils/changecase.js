const getReverseCaseString = (defaultString) => {
  var arrayFromString = [...defaultString]

  const reverseString = arrayFromString.map((char) => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase()
    } else {
      return char.toUpperCase()
    }
  })
  return reverseString.join('')
}
console.log(getReverseCaseString('hELLo Hello'))
