numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


numbers = numbers.filter(function(element, index, array){
	if(element % 2 === 0){
		return element
	}
})
console.log(numbers)
