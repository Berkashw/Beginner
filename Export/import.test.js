const polindromcheck = require('../Utils/polindromcheck.js')

test('checking string polindrom', () => {
  expect(polindromcheck('adada')).toBe(true)
})
