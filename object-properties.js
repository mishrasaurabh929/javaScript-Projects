var food = {
	types:'only pizza'
}

console.log(food.types)
//console.log(food['types']) 

//For in loop
var person = {
	fname: 'John',
	lname: 'Doe',
	age: 25
}

for(var x in person) {
	console.log('x: ',x)
	console.log('person[x]: ', person[x])
}

keys = Object.keys(person)
value = Object.values(person)

console.log(keys)
console.log(value)
