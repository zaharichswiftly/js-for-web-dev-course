// Тернарный оператор, "?" - то, ":" - иначе

const getCarName = price =>
	price > 100000
		? 'BMW'
		: price > 50000
		? 'Audi'
		: price > 20000
		? 'Opel'
		: 'Lada'

console.log(getCarName(120000))
