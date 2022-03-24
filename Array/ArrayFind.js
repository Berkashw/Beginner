const person1 = { age: 15, name: "Andr", city: "Moscow", isAuthorized: false }
const person2 = {
	age: 14,
	name: "Bori",
	city: "Uryupinsk",
	isAuthorized: false,
}
const person3 = { age: 10, name: "Den", city: "Tver", isAuthorized: true }

const clients = [person1, person2, person3]

console.log(
	clients.find((person) => {
		const { name } = person
		const isEqual = name === "Den"
		return isEqual
	})
)
console.log(clients.find(({ name }) => name === "Bori"))
