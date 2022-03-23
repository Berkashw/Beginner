const person1 = {age: 15, name:'Andr', city:'Moscow', authorized:true }
const person2 = {age: 14, name:'Bori', city:'Pskov', authorized:false }
const person3 = {age: 10, name: 'Den', city:'Tver', authorized: true}

const clients = [person1,person2,person3]

function multiple(client,multIndex) { 
      client.age *= multIndex
   return client
}

const clientsDoubleAge = clients.map(({...client}) => multiple(client,2))


const clientsTripleAge = clients.map(({...client}) => multiple(client,3))
console.table (clientsDoubleAge)
console.table(clientsTripleAge)
