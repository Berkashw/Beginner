//../Utils/changecase.js

const getReverseCaseString = (defaultString) => {
  const reverseStringArray = [...defaultString].map((char, index) => {
    if (index === 0) {
      return char.toUpperCase()
    } else {
      if (char === char.toUpperCase()) {
        return char.toLowerCase()
      } else {
        return char.toUpperCase()
      }
    }
  })

  return reverseStringArray.join('')
}
console.log(getReverseCaseString('heLLo'))
export { getReverseCaseString }
