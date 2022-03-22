const person1 = {age: 15, name:'Andr', city:'Moscow', authorized:true }
const person2 = {age: 14, name:'Bori', city:'Pskov', authorized:false }
const person3 = {age: 10, name: 'Den', city:'Tver', authorized: true}

const clients = [person1,person2,person3]
const multiple = 2
const clientsDoubleAge = clients.map((client)=> {
    client.age *= multiple
    return client
})

console.table(clientsDoubleAge)