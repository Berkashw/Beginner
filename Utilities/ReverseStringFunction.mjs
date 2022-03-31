// ../Utilities/ReverseStringFunction.mjs
const straithString = 'ReverseThis'

export function reverseString(string) {
  const arrayString = [...string]
  arrayString.reverse()
  return arrayString.join('')
}

console.log(reverseString(straithString))
console.log(straithString)
