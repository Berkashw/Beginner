const polindromcheck = require('../Utils/polindromcheck.js')
const getReverseCaseString = require('../Utils/changecase.js')

test('Checking string polindrom', () => {
  expect(polindromcheck('adada')).toBe(true)
})

test('Reversing string ', () => {
  expect(getReverseCaseString('Hello')).toBe('hELLO')
})
