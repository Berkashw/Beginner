import { getFirstUpCaseString } from '../Utils/checkcorrectcasename.js'
//const fullName = 'nAmE sURNAME LAsTnAmE'

const getCorrectFullName = (fullName) =>
  fullName
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((word) => getFirstUpCaseString(word))
    .join(' ')

console.log(getCorrectFullName('nAmE    sUrnaMe      LasTNAMe'))
