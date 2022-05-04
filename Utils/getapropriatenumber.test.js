const getApropriateString = require('../Utils/getapropriatenumberstring.js')

test('apropriate string', () => {
  expect(getApropriateString(100400500)).toBe('100400500')
})
