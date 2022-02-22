const dog = {
    age: 1,
    type: 'dog',
    voice: 'Barkinq',
    size: 'medium',
    color:'red',
    name:'Red Barking Dog'
}
const cat = {
    age: 2,
    type: 'Cat',
    voice: 'Meow',
    size: 'Small',
    color:'grey',
    name:'Demon'
}
class Animal {
    constructor(animalObject){
        this.type = animalObject.type
        this.animalVoice = animalObject.voice
        this.animalSize = animalObject.size
        this.animalColor = animalObject.color
        this.name = animalObject.name
}
saySomthing=()=> {console.log(this.animalVoice)}
sayHello = () => {console.log('hi ' + this.name)}
}
const cat1 = new Animal(cat)
const dog1 = new Animal(dog)
dog1.sayHello()
dog1.saySomthing()
cat1.sayHello()
cat1.saySomthing()