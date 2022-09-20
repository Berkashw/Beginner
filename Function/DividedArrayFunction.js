const arrayForTest = [10, 100, 55, 32, 52, 11, 54, 10]
const getDivadedArray = (arrayNumber, divisor) =>
  arrayNumber.filter((num) => num % divisor === 0)

console.table(getDivadedArray(arrayForTest, 11))
