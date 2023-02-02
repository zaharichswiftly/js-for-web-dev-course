/* Data types */

const firstName = 'John' // <- пример строки
const age = 30 // <- пример числа
const isStudent = true // <- пример булевого значения
const x = null // <- пример null
const y = undefined // <- пример undefined

/* в основном для web-разработки вам понадобиться 3 базовых типа данных такие, как строка (string), число (int) и конечно же болевое значение (bool) */

const person = {
	// <- пример объекта (object) - это набор свойств (properties) и методов (methods) внутри фигурных скобок {} и разделенных запятой (,)
	firstName: 'Zahar',
	age: 18,
	isStudent: true,
	cities: ['Kyiv', 'Lviv', 'Odessa'],

	getName() {
		return this.firstName // <- this - это ссылка на объект person и мы можем обратиться к любому свойству объекта person через this
	}
}

console.log(person.getName()) // <- вызов функции getName() в объекте person и вывод в консоль результата выполнения функции getName()
