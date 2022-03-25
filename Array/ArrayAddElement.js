const person1 = { age: 10, name: 'Andr', city: 'Moscow', client: false }
const person2 = { age: 14, name: 'Bori', city: 'Uryupinsk', client: false }
const person3 = { age: 20, name: 'Den', city: 'Tver', client: true }

let clients = [person1, person2, person3]
clients.push(person2)
clients.push(person3)
clients.unshift(person1)
clients.forEach((element) => console.log(element))

console.table(clients)
