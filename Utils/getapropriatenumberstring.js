// ../Utils/getapropriatenumberstring.js

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
console.log(numberWithSpaces(100500800))

module.exports = numberWithSpaces
