// "../Utilities/ArrayMultiplier.mjs"
const getArrayWhithMultipliedParameter = (
  array,
  multiplier,
  parameter = 'age'
) => {
  const arrayResult = array.map(({ ...item }) => {
    item[parameter] *= multiplier
    return item
  })
  return arrayResult
}
export { getArrayWhithMultipliedParameter }
