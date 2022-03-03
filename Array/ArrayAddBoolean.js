const person1 = {age: 15, name:'Andr', city:'Moscow', authorized:true } 
const person2 = {age: 14, name:'Bori', city:'Uryupinsk', authorized:false }
const person3 = {age: 10, name: 'Den', city:'Tver', authorized: true}

let clients = [person1,person2,person3] 

clients.forEach(element => {
   element.available = true  
});

console.table(clients)