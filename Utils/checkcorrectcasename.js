//../Utils/checkcorrectcasename.js

const getFirstUpCaseString = (defaultString) => {
  const reverseStringArray = [...defaultString].map((char, index) => {
    if (index === 0) {
      return char.toUpperCase()
    } else {
      return char.toLowerCase()
    }
  })
  return reverseStringArray.join('')
}
console.log(getFirstUpCaseString('nAME'))
