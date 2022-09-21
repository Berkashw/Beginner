const getCurrentWeekDay = require('../Array/ArrayWeekDay.js')

test('Weekday of 2022.09.20 should be Tuesday 3', () => {
  const date = new Date(2022, 9, 20)
  expect(getCurrentWeekDay(date)).toBe('Tuesday')
})
