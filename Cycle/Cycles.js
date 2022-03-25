const myArray = [true, 'abc', 10]
const myObject = {
  x: 10,
  y: true,
  z: 'abc',
}

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i], i + ' for')
}

myArray.forEach((element, index) => {
  console.log(element, index + ' forEach')
})

let i = 0
while (i < 3) {
  console.log(myArray[i] + ' while')
  i++
}

i = 0
do {
  console.log(myArray[i] + ' dowhile')
  i++
} while (i < 3)

i = 0
for (const key in myObject) {
  console.log(key, myObject[key] + ' for in')
}

for (const key in myArray) {
  console.log(myArray[key], key)
}

const myString = 'Dmitriy'
for (const letter of myString) {
  console.log(letter)
}

for (const element of myArray) {
  console.log(element + 'for of array')
}

myArray.forEach((element) => {
  console.log(element + ' for each')
})
