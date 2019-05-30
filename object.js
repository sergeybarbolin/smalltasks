const user = {};
user.name = 'Вася';
user.surname = 'Петров';
user.name = 'Сергей';
user.age = 25;

delete user.name;

for (let propName in user) {
	console.log(user[propName]);
}

/////////////////////////

const test = {
	'3': 'value0',
	'40': 'value1',
	'1': 'value2'
}

const test1 = {
	'+3': 'value0',
	'+40': 'value1',
	'+1': 'value2'
}

for (let propName in test) {
	console.log(propName + ': ' + test[propName]);
}

for (let propName in test1) {
	let value = test1[propName];
	propName = +propName;
	console.log(propName + ': ' + value);
}

const userProps = Object.keys(user).length;

//////////////////////////

// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

const isEmpty = obj => !!Object.keys(obj).length;

const empty = {};

console.log(isEmpty(empty));

empty.lala = 'la';

console.log(isEmpty(empty));

////////////////////////////

// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.

const salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

const salaries1 = {};

const sumProps = obj => {
	let result = 0;

	for (let key in obj) {
		result += obj[key];
	}

	return result;
}

console.log(sumProps(salaries));
console.log(sumProps(salaries1));


////////////////////////////
// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

const menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

const multiplyNumeric = obj => {
	const result = {};

	for (let key in obj) {
		if (isNumeric(obj[key])) {
			result[key] = obj[key] * 2;
		} else {
			result[key] = obj[key];
		}
	}
	return result;
}



console.log(multiplyNumeric(menu));


