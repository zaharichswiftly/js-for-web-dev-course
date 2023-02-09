/* switch */

const getFruit = (fruits = 'Berries') => {
	switch (fruits) {
		case 'Oranges':
			console.log('Oranges are $0.59 a pound.')
			break
		case 'Berries':
			console.log('Berries are $1.99 a pound.')
			break
		case 'strawberries':
			console.log('Strawberries are $1.29 a pound.')
			break
		default:
			console.log(`Sorry, we are out of fruits ${fruits}.`)
	}
}

getFruit() //<- сюда можно передать значение, которое будет возвращено в консоль
