const numberWithSpaces = require('../Utils/getapropriatenumberstring.js')

test('string should be with spaces', () => {
  expect(numberWithSpaces(100500200)).toBe('100 500 200')
})
