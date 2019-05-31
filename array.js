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



// Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна менять сам массив и ничего не возвращать.

const filterRangeInPlace = (arr, a, b) => {

	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (!(arr[i] >= a && arr[i] <= b)) {
			arr.splice(i, 1);
		}
	}


}

const arr3 = [5, 3, 8, 1];

filterRangeInPlace(arr3, 1, 4);

// console.log(arr3);

// Как отсортировать массив чисел в обратном порядке?

let arr4 = [5, 2, 1, -10, 8];

arr4 = arr4.sort((a,b) => b-a);

// console.log(arr4);


// Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.

const arr5 = ["HTML", "JavaScript", "CSS"];

let arr6 = arr5.slice().sort();

// for (let i = 0; i < arr5.length; i++) {
// 	arr6[i] = arr5[i];
// }

// arr6.sort();

// console.log(arr6);


// Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.


let arr7 = [1, 2, 3, 4, 5];

arr7.sort((a,b) => rand(-1, 2));

// console.log(arr7);



// Напишите код, который отсортирует массив объектов people по полю age.

const vasya = { name: "Вася", age: 23 };
const masha = { name: "Маша", age: 18 };
const vovochka = { name: "Вовочка", age: 6 };

const people = [ vasya , masha , vovochka ];

people.sort((a, b) => a.age - b.age);

// for (let i = 0; i < people.length; i++) {
// 	console.log(people[i].name);
// }


// Односвязный список – это структура данных, которая состоит из элементов, каждый из которых хранит ссылку на следующий. Последний элемент может не иметь ссылки, либо она равна null.
// Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
// Напишите функцию printList(list) при помощи рекурсии.
// Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
// Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


const printList = list => {
	let tmp = list; 

	while (tmp) {
		console.log(tmp.value);
		tmp = tmp.next;
	}
}

// printList(list);

const printList1 = list => {
	console.log(list.value);
	if (list.next) {
		printList1(list.next);
	}
}

// printList1(list);

const printReverseList = list => {
	if (list.next) {
		printReverseList(list.next);
	}
	console.log(list.value);
}

// printReverseList(list);

const printReverseList1 = list => {
	let tmp = list;
	let arr = [];

	while (tmp) {
		arr.push(tmp.value);
		tmp = tmp.next;
	}

	for (let i = arr.length -1; i >= 0; i--) {
		console.log(arr[i]);
	}

}

// printReverseList1(list);



// Отфильтровать анаграммы

const arr8 = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

const aclean = arr => {
	let obj = {};
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		let sorted = arr[i].toLowerCase().split('').sort().join('');
		obj[sorted] = arr[i];
	}

	let result = [];

	for (let key in obj) {
		result.push(obj[key]);
	}

	return result;
}

// console.log(aclean(arr8));


// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

const strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];
//es5
// function unique(arr) {
//   var result = [];

//   nextInput:
//     for (var i = 0; i < arr.length; i++) {
//       var str = arr[i]; // для каждого элемента
//       for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
//         if (result[j] == str) continue nextInput; // если да, то следующий
//       }
//       result.push(str);
//     }

//   return result;
// }
//es6
const unique = arr => [...new Set(arr)];

// console.log(unique(strings));



const arr9 = ["Яблоко", "Апельсин", "Груша"];

arr9.forEach((item, i, arr) => {
	// console.log(i + ': ' + item + '. Массив: ' + arr);
});


const arr10 = [1, -1, 2, -2, 3];

const positiveArr = arr10.filter(number => number > 0);

// console.log(positiveArr);

const names1 = ['HTML', 'CSS', 'JavaScript'];

const nameLengths = names1.map(name => name + 1);

// console.log(nameLengths);

const arr11 = [1, -1, 2, -2, 3];

// console.log(arr11.every((number) => number > 0));
// console.log(arr11.some((number) => number > 0));

const arr12 = [1, 2, 3, 4, 5];
const sumArr = arr12.reduce((sum, current) => sum + current);

// console.log(sumArr);

const upperProps = obj => {
	result = [];

	for (let key in obj) {
		result.push(obj[key].toUpperCase())
	}

	return result;

};


console.log(upperProps({ name: 'Сергей', lastName: 'Петров' }));