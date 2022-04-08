//../Utils/changecase.js

const getReverseCaseString = (defaultString) => {
  const reverseStringArray = [...defaultString].map((char, index) => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase()
    } else {
      return char.toUpperCase()
    }
  })

  return reverseStringArray.join('')
}
console.log(getReverseCaseString('HeLLo'))
export { getReverseCaseString }
