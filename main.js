/* const vs let */

/*const person = {
	firstName: 'Zahar',
	age: 18
}

const getName = () => 'Zahar'

person.firstName = 'Max'

console.log(person)*/

/* Data types */

/*const firstName = 'John'
const age = 30
const isStudent = true
const x = null
const y = undefined

const person = {
	firstName: 'Zahar',
	age: 18,
	isStudent: true,
	cities: ['Kyiv', 'Lviv', 'Odessa'],
	getName() {
		return this.firstName
	}
}

console.log(person.getName())
*/

/* base function */

// function getName(name) {
// 	return name
// }

//ES6
// const getName = (name) => name

// const sum = (num1, num2) => num1 + num2

// console.log(sum(1, 2))

/* condition */

// function getCarName(price) {
// 	if (price > 100000) {
// 		return 'BMW'
// 	} else if (price > 50000) {
// 		return 'Audi'
// 	} else if (price > 20000) {
// 		return 'Opel'
// 	} else {
// 		return 'Lada'
// 	}
// }

// console.log(getCarName(200))

// Тернарный оператор, "?" - то, ":" - иначе

// const getCarName = price =>
// 	price > 100000
// 		? 'BMW'
// 		: price > 50000
// 		? 'Audi'
// 		: price > 20000
// 		? 'Opel'
// 		: 'Lada'

// console.log(getCarName(120000))

/* switch */

// const getFruit = (fruits = 'Berries') => {
// 	switch (fruits) {
// 		case 'Oranges':
// 			console.log('Oranges are $0.59 a pound.')
// 			break
// 		case 'Berries':
// 			console.log('Berries are $1.99 a pound.')
// 			break
// 		case 'strawberries':
// 			console.log('Strawberries are $1.29 a pound.')
// 			break
// 		default:
// 			console.log(`Sorry, we are out of fruits ${fruits}.`)
// 	}
// }

// getFruit() //<- сюда можно передать значение, которое будет возвращено в консоль

/* DOM */

// прикреплю ссылкой
