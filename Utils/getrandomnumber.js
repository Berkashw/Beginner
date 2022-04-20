// .//Utils/getrandomnumber.js

const getRandomNumber = (min, max) => {
  const randomNumber = Math.random() * (max - min) + min
  return Math.round(randomNumber)
}
export { getRandomNumber }
