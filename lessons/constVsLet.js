/* const vs let */

const person = {
	firstName: 'Zahar',
	age: 18
}

const getName = () => 'Zahar' // <- пример простой стрелочной функции

person.firstName = 'Max' //<- если вы работаете с объектом то лучше использовать const и он в объекте изменяемый, как показывает пример

console.log(person) // <- вывод в консоль объекта person

// чтобы вывести результат в консоль в терминале вбить команду node + имя файла js
