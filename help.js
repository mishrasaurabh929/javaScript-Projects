//js array
//array.js
pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni']
console.log(pizzaToppings)
//------------------------------------------------------

var fruits = ['Apple', 'Orange', 'Banana']

console.log(fruits.length)

var food = ['apple', 'pizza', 'pear']
console.log(food[1])

//access first element
console.log(fruits[0]);

//access last element
console.log(fruits[fruits.length - 1])

//push and pop on array
fruits.push('cherry')
console.log(fruits)

popped = fruits.pop()
console.log(popped)
console.log(fruits)
//-------------------------------------------------------
//accessing-array-values.js

var food = ['apple', 'pizza', 'pear']
console.log(food[1])
//------------------------------------------------------
//looping-through-array.js
pets = ['cat', 'dog', 'rat']

for(let i=0;i<pets.length;i++){
	pets[i] += 's'
}

console.log(pets)
//-------------------------------------------------------
/*
Loops in js - for while dowhile forin
-----
*/
//function.js
function eat(food){
	return food + ' tasted really good.'
}
console.log(eat('bananas'))
//------------------------------------------------------
//function-arguments.js
var math = function(a,b,c){
	return b*c+a
}

console.log(math(53, 61, 67)) 
//-------------------------------------------------------
/*
for each in array
fruits.forEach() --- calls a callback function for each element in an array.
arguments --- value, index, array
*/

var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});


//----------------------------------------------------------
//array-filtering.js
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


numbers = numbers.filter(function(element, index, array){
	if(element % 2 === 0){
		//console.log(element,index,array)
		return element
	}
})
console.log(numbers)
/*things interpreted as false
/ false
/ 0
/ null
/ ''- epmty string
/ undefined
/ everything else is true
*/
//----------------------------------------------------------------
//splice - changes content of array by removing or replacing existing elements
//args - startindex, deleteCount, [items]
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months)
months.splice(4, 1, 'May');
console.log(months)

//-------------------------------------------------------------------
//arrow function

var eat = (food) => {
    return food + ' tasted really good.'
}

console.log(eat('bananas'))

//-------------------------------------------------------------------
object
newObject = {}
console.log(newObject)
console.log(typeof newObject)

//object.js
var pizza = {
	toppings: ['cheese', 'sauce', 'pepperoni'],
	crust : 'deep dish',
	serves: 2
}
console.log(pizza)
//-----------------------------------------------------------------
//object-properties.js
var food = {
	types:'only pizza'
}

console.log(food.types)
//console.log(food['types']) 
//-----------------------------------------------------------------
//For in Loop
var person = {
	fname: 'John',
	lname: 'Doe',
	age: 25
}

for(var x in person) {
	console.log('x: ',x)
	console.log('person[x]: ', person[x])
}

