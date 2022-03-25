const humanOne = {
  age: 33,
  name: 'Al',
  country: 'Russia',
  adult: false,
  employee: true,
}
const humanTwo = {
  age: 17,
  name: 'Bad',
  country: 'Mars',
  adult: false,
  employee: false,
}
class Person {
  constructor(human) {
    this.age = human.age
    this.name = human.name
    this.country = human.country
  }
}
class Employee extends Person {
  constructor(human) {
    super(human)
    this.adult = human.adult
    this.employee = human.employee
  }
  sayHello = () => {
    console.log('Hi my name is ' + this.name)
  }
  employeeCheck = () => {
    if (this.employee) {
      console.log('Welcome ' + this.name)
    } else {
      console.log('You are not alowed ' + this.name)
    }
  }
}
const employee1 = new Employee(humanOne)
employee1.sayHello()
employee1.employeeCheck()
const employee2 = new Employee(humanTwo)
employee2.sayHello()
employee2.employeeCheck()
