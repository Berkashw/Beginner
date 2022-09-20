const getCurrentWeekDay = (date) => {
  const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  if (date === undefined) {
    date = new Date()
    return week[date.getDay()]
  } else {
    date.setMonth(date.getMonth() - 1)
    return week[date.getDay()]
  }
}
const date = new Date(2022, 10, 20)
console.log(getCurrentWeekDay(date))
