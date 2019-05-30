const arr = [, , 'dasd', 'adsd', 'sadasd', 'sssssssss'];
let result;

arr[0] = 'gwe';
arr[1] = 'sad';

arr.pop();
arr.push('sssssssss');
arr.shift();
arr.unshift('test', 'test1');

result = arr;

for (let i = 0; i < arr.length; i++) {
	// console.log(arr[i]);
}

// arr.length = 2;

// console.log(result);

////////////////////
// У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
// Напишите код для получения последнего элемента goods.

const goods = ['dasd', 'adsd', 'sadasd', 'sssssssss'];
// console.log(goods[goods.length - 1]);


// У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».
goods[goods.length] = 'last';
// console.log(goods[goods.length - 1]);


// Создайте массив styles с элементами «Джаз», «Блюз».
// Добавьте в конец значение «Рок-н-Ролл»
// Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
// Удалите первое значение массива и выведите его alert.
// Добавьте в начало значения «Рэп» и «Регги».

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
// console.log(styles.shift());
styles.unshift('Рэп', 'Регги');

// console.log(styles);


// Напишите код для вывода alert случайного значения из массива:
const rand = (min = 0, max = 999999) => Math.floor(Math.random() * (max + 1 -min));

// console.log(styles[rand(0, styles.length - 1)]);


// Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.

const find = (arr, value) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) { 
			return i; 
		} 
	}
	return -1;
}

const arr1 = ["test", 2, 1.5, false];


// console.log(find(arr1, "test")); // 0
// console.log(find(arr1, 2)); // 1
// console.log(find(arr1, 1.5)); // 2

// console.log(find(arr1, 0)); // -1


// Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.
const filterRange = (arr, a, b) => {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= a && arr[i] <= b) {
			result.push(arr[i]);
		} 
	}

	return result;
}

const arr2 = [5, 4, 3, 8, 0];

// console.log(filterRange(arr2, 3, 5));


const names = 'Маша, Петя, Марина, Василий';
const arrNames = names.split(', ');
const newNames = arrNames.join(' ');

// delete arrNames[1];

arrNames.splice(1,1, 'неПетя')
arrNames.splice(1,1);
arrNames.splice(1,0,'Петя');
arrNames.splice(-1,0,'Лена');

// arrNames.splice(2);

const copyArrNames = arrNames.slice()

// console.log(copyArrNames);
// console.log(arrNames);


let num = [3,4,3,21,54,33,15,22,12,17,65];
num = num.concat(0,1,100,105, [200,300,400], [0.4,0.3]);
const numSort = num.sort((a,b) => a - b);
const numReverse = numSort.reverse();

// console.log(numReverse.indexOf(400));

const user = {
  name: "Петя",
  age: 30
}

const keysUser = Object.keys(user);

// console.log(keysUser);

// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
const obj = {
  className: 'open mymenu'
}

const addClass = (obj, cls) => {
	let classes = obj.className ? obj.className.split(' ') : []; 

	// for (let i = 0; i < classes.length; i++) {
	// 	if (classes[i] === cls) {
	// 		return;
	// 	}
	// }
	if (classes.indexOf(cls) === -1) {
		classes.push(cls);
	}
	obj.className = classes.join(' ');

	return obj;

}

// addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'menu'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'

// console.log(obj);




// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть, дефисы удаляются, а все слова после них получают заглавную букву.

const camelize = (str) => {
	let arr = str.split('-');
	for (let i = 1; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
		
	}

	return arr.join('');

}

// console.log(camelize("background-color"));



// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

const obj1 = {
  className: 'open open open menu menu'
};

const removeClass = (obj, cls) => {
	let classes = obj.className ? obj.className.split(' ') : [];
	
	for (let i = 0; i < classes.length; i++) {

		if (classes[i] === cls) {
			classes.splice(i,1);
			i--;
		}
		
	}

	obj.className = classes.join(' ');

}


removeClass(obj1, 'menu');
// console.log(obj1);