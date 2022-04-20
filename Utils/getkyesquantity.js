const testObject = { key1: 1, key2: 2, key3: 3, key4: 4 }

const getKeyQuantity = (object) => Object.keys(object).length

console.log(getKeyQuantity(testObject))
