import { getFirstUpCaseString } from '../Utils/checkcorrectcasename.js'
//const fullName = 'nAmE sURNAME LAsTnAmE'

const getCorrectFullName = (fullName) => {
  const arrayParts = fullName.replace(/\s+/g, ' ').split(' ')
  const correctFullName = arrayParts.map((word) => getFirstUpCaseString(word))
  return correctFullName.join(' ')
}

console.log(getCorrectFullName('nAmE    sUrnaMe      LasTNAMe'))
