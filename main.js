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

/* Array methods */
//
// const cities = ['Moscow', 'Kazan', 'Ekaterinburg', 'Poltava', 'Krasnodar']
//
// const students = [
// {
// name: 'Zahar',
// age: 18,
// city: 'Moscow'
// },
// {
// name: 'Ivan',
// age: 20,
// city: 'Paris'
// },
// {
// name: 'Petro',
// age: 19,
// city: 'Madrid'
// }
// ]
//
/* for (циклы)*/

// for (let i = 0; i < cities.length; i++) {
// 	console.log(cities[i])
// }

/* map || foreach */

// cities.forEach(city => console.log(city))

// console.log(cities.map(city => city + '1'))

/* filter */

// console.log(students.filter(student => student.age >= 20))

/* push & unshift */

// cities.push('Berlin')
// cities.unshift('Milan')
// console.log(cities)

/* slice */

// console.log(cities.slice(1, 3))

/* find */

// console.log(students.find(student => student.name === 'Zahar'))

/* reduce */
//
// const cart = [
// {
// id: 1,
// name: 'iPhone 12',
// price: 100000
// },
// {
// id: 2,
// name: 'iPhone 12 Pro',
// price: 120000
// },
// {
// id: 3,
// name: 'iPhone 12 Pro Max',
// price: 140000
// }
// ]
//
// console.log(cart.reduce((acc, product) => acc + product.price, 0))
//

/* some objects */

// const person = {
// name: 'Zahar',
// age: 18,
// city: 'Moscow'
// }
//
// const dividend = {
// profit: 100
// }

// Assign

// console.log(Object.assign(person, dividend))

/* Entries */

// console.log(Object.entries(person)) <- превращает объект в  своеобразный массив

/* Keys and values */

// console.log(Object.keys(person)) <- выводит ключи
// console.log(Object.values(person)) <- выводит значения

/* Fetch */

//document.querySelector('body').style.backgroundColor = '#1F1F28'

// fetch('https://jsonplaceholder.typicode.com/todos/2')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))
//

/* Async fetch */

// const fetchTodo = async () => {
// try {
// const response = await fetch('https://jsonplaceholder.typicode.com/todos/2')
// const json = await response.json()
// console.log(json)
// } catch (err) {
// console.log(err)
// }
// }
//
// fetchTodo()
//
