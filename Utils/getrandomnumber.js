const getRandomNumber = (min, max) => {
  const ranmdomNumber = Math.random() * (max - min) + min
  return Math.ceil(ranmdomNumber)
}
console.log(getRandomNumber(10, 20))
