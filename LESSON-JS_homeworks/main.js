//  console.log("salom dunyo");

// const names = ["Mark","John","Harry Potter"];

// function show(name,index) {
//  console.log(`[${index}] ${name}`);

// };

// names.forEach(show);

// console.log("-------------------------CUSTOM FOREACH---------------------------");

// function forEach(fn) {
//  for (let i = 0; i < names.length; i++) {
//   fn(names[i],i);

//  }
// };

// forEach(show);
// -----------------------------------------------------------------------------------------
//            🎓  HOMEWORKS     ,    💁🏻‍♂️ METHODS

// 👍 Map method
// 1. map: Berilgan massiv (array) elementlariga biron bir amalni bajarib,
//  yangi bir massivni qaytaradi, bu amal natijalarini o'z ichiga oladi.

// const numbers = [1, 2, 3, 4, 5];
// const newArray = numbers.map(num => num * num);
// console.log(newArray); // [1, 4, 9, 16, 25]
// // console.log("-------------------------✅CUSTOM MAP✅---------------------------------------");
// function idx(index) {
// 	console.log(`[${index}]`);
// }

// function map(mp) {
// 	for (let number of numbers) {
// 		mp(number * number);
// 	}
// }
// map(idx); // [1, 4, 9, 16, 25]

// -------------------------------------------------------------------------------------
// 👍 2. filter: Berilgan massiv (array) elementlaridan faqat shartni
// qondiruvchi elementlarni o'z ichiga olgan yangi massivni qaytaradi.

// Arrayni  ma'lum bir elementlardan tozalash ya'ni filtirlash

// Filter method
// const ages = [25, 30, 18, 15, 40];
// const adults = ages.filter((age) => age >= 18);
// console.log(adults); // [25, 30, 18, 40]
// console.log("---------------✅CUSTOM FOREACH✅---------------------------------------");

// function years(idx) {
// 	console.log(idx); // [25, 30, 18, 15, 40]
// }

// function filter(fil) {
// 	for (let i = 0; i < ages.length; i++) {
// 		if (ages[i] >= 18) {
// 			fil(ages[i]);
// 		}
// 	}
// }
// filter(years); // [25, 30, 18, 40]
// --------------------------------------------------------------------------------------
// 👍 3. find: Berilgan massiv (array) elementlaridan faqat birinchi shartga javob bera
//  olishi mumkin bo'lgan elementni topadi. Topilmasa, undefined qaytaradi.
// Array ichidagi elementni qidirishda yordam beradi

// find method
// const fruits = ["apple", "banana", "grape", "orange"];
// const foundFruit = fruits.find(fruit => fruit === 'grape');
// console.log(foundFruit); // 'grape'
// console.log("---------------✅CUSTOM FIND✅---------------------------------------");

// function items(fruit) {
// 	console.log(fruit);
// }

// function find(items) {
// 	for (let i = 0; i < fruits.length; i++) {
// 		if (fruits[i] === "grape") {
// 			items(fruits[i]);
// 		}
// 	}
// }

// find(items);

// ------------------------------------------------------------------------------------
// 👍 4. findIndex: Berilgan massiv (array) elementlaridan faqat birinchi shartga javob
//  bera olishi mumkin bo'lgan elementning indeksini topadi. Topilmasa, -1 qaytaradi.

// findIndex method

// const colors = ["red", "blue", "green", "yellow"];
// const indexOfGreen = colors.findIndex(color => color === 'green');
// console.log(indexOfGreen); // 2
// console.log("----------------✅CUSTOM FindIndex✅---------------------------------------");

// function color(index) {
// 	console.log(index);
// }

// function findeIndex(idx) {
// 	for (let i = 0; i < colors.length; i++) {
// 		if (colors[i] === "green") {
// 			idx(i);
// 		}
// 	}
// }
// findeIndex(color); // 2

// ------------------------------------------------------------------------------------
// 👍 5. reduce: Berilgan massiv (array) elementlarini bir-biriga
//  qo'shib o'tkazib, yakun natijani qaytaradi. Bunda boshlang'ich
//  qiymat (initial value) o'zgartirib bo'lishi mumkin.
// reduce method
// const numbers = [10, 20, 30, 40, 40];
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum); // 100
// console.log("-------------------------✅ CUSTOM REDUCE ✅----------------------------");

// function summa(sum) {
// 	console.log("summa = ", sum);
// }
// let summa2 = 0;
// function reduce(num) {
// 	for (let i = 0; i < numbers.length; i++) {
// 		summa2 += numbers[i];
// 	}
// 	num(summa2);
// }
// reduce(summa); // 100

// console.log("----------------❇️ CUSTOM REDUCE ❇️------------------");

// function plus(total, num) {
//   return total + num;
// }

// let nums = [10, 20, 30, 45];

// function reduce(fn, item) {
//   let sum = 0;
//   for (let i = 0; i < item.length; i++) {
//     sum = fn(sum, item[i]);
//   }
//   return sum;
// }

// let result = reduce(plus, nums);
// console.log(result);
// ----------------------------------------------------------------

// ----------------------- ❇️FUNCTION TYPES❇️-----------------------------------------
// ✅  FUNCTION DECLARATION
// ✅  FUNCTION EXPRESSION
// ✅  ARROW FUNCTION
// --------------------------✌️  PRACTICE  JS FUNCTION ✌️--------------------------------

// FUNCTION DECLARATION 👇
// function evenOdd(number) {
//  if (number % 2 === 0) {
//        console.log(`${number} is even`);
//  }  else{
//   console.log(`${number} is odd`);
//  }
// }

// evenOdd(20);   // ✅

// FUNCTION EXPRESSIONS 👇

// const evenOdd = function (number) {
// 	if (number % 2 === 0) {
// 		console.log(`${number} is even`);
// 	} else {
// 		console.log(`${number} is odd`);
// 	}
// };
// evenOdd(25);  // ✅

// ARROW FUNCTION 👇

// const evenOdd = (number) => {
// 	if (number % 2 === 0) {
// 		console.log(`${number} is even`);
// 	} else {
// 		console.log(`${number} is odd`);
// 	}
// };

// evenOdd(32);   // ✅

// ----------------------------------------------------------------------

// FUNCTION DECLARATION 👇

// function maxNumber(a, b) {
// 	if (a > b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }

// console.log(maxNumber(10, 20)); // ✅

// FUNCTION EXPRESSION 👇

// const maxNumber = function (a, b) {
// 	return a > b ? a : b;
// };

// console.log(maxNumber(40, 20));  // ✅
// ARROW FUNCTION  👇

// const maxNumber = (a, b) => a > b? a : b;
// console.log(maxNumber(40, 20));  // ✅

// ---------------------------------------------------------------
// REVERSE NUMBER 🛩️
// function reverse(number) {
// 	const numberStr = String(number);
// 	const reversed = numberStr.split("").reverse().join("");
// 	console.log(+reversed);
// }

// reverse(20);

// const names = ["Arslonbek", "Maftunaxon", "Farangizxon", "Azizaxon", "Jamshid"];

// const result = names.map((name) =>name.endsWith("xon")? `<F>${name}🙋🏻‍♀️</F>`: `<M>${name}🙋🏻</M>`

// );

// console.log(result);
//----------------------------------------------------------------

//✅ SHIFT METHOD => BU funcsiya array elementini boshidagi elementni
// o'chirib yangi array hosilqiladi
//---------------------💁🏻‍♂️CUSTOM SHIFT-----------------------------
// const fruits1 = ["apple", "pomegranade", "pear", "grape"];
// function fruits(fruit) {
// 	console.log(`[${fruit}]`);
// }
// function shift(fn) {
// 	let nr = [];
// 	for (let i = 1; i < fruits1.length; i++) {
// 		nr = fruits1.slice(1);
// 	}
// 	fn(nr);
// }
// shift(fruits);

// let result = fruits1.map(item => fruits1.push('menu'));

// console.log(result);

//---------------------💁🏻‍♂️CUSTOM UNSHIFT-----------------------------

// let names = ["Arslonbek", "Maftunaxon", "Azizaxon", "Farangizxon", "Jamshid"];

// function unshift(item, arr) {
//   const len = arr.length;
//   for (let i = 0; i  > len; i++) {}
//   arr[0] = item;
//   console.log(arr);
// }

// unshift("jahongir", names);

//---------------------💁🏻‍♂️CUSTOM FILTER-----------------------------

// const names = ["Arslonbek", "Maftunaxon", "Azizaxon", "Farangizxon", "Jamshidbek", "Abrorbek"];

// function filter(fn, items) {
// 	const result = [];
// 	for (let i = 0; i < items.length; i++) {
// 		const item = items[i];
// 		const cond = fn(item, i);
// 		if (cond) {
// 			result.push(item);
// 		}
// 	}
// 	return result;
// }

// const boys = filter((name) => name.includes("bek"), names);
// console.log("BOYS",boys);

//--------------------- ✅ FizzBuzz✅-----------------------------

// function fizzBuzz(start, end) {
// 	let result = [];
// 	for (let i = start; i < end; i++) {
// 		let value = "";
// 		if (i % 3 === 0) value += "Fizz";
// 		if (i % 5 === 0) value += "Buzz";
// 		if (!value) value += i;
// 		result.push(value);
// 	}
// 	return result;
// }

/*  [1,2,3,4,5,6,7,8,9,10]
 *    1 < 10 ;  value = ""; (i % 3 === 0 )  value += "Fizz" (i % 5 === 0 ) value += "Buzz"   value = "1";  result = [1,]
 *    2 < 10 ;  value = ""; (i % 3 === 0 )  value += "Fizz" (i % 5 === 0 ) value += "Buzz"   value = "2";  result = [1,2,]
 *    3 < 10 ;  value = ""; (i % 3 === 0 )  value += "Fizz" (i % 5 === 0 ) value += "Buzz"   value = "";   result = [1, 2, Fizz,]
 *    4 < 10 ;  value = ""; (i % 3 === 0 )  value += "Fizz" (i % 5 === 0 ) value += "Buzz"   value = "4";  result = [1,2, Fizz,4]
 *    5 < 10 ;  value = ""; (i % 3 === 0 )  value += "Fizz" (i % 5 === 0 ) value += "Buzz"   value = "";   result = [1,2, Fizz,4,Buzz,]
 *    6 < 10 ;  value = ""; (i % 3 === 0 )  value += "Fizz" (i % 5 === 0 ) value += "Buzz"   value = "";   result = [1,2, Fizz,4,Buzz,Fizz,]
 *    7 < 10 ;  value = ""; (i % 3 === 0 )  value += "Fizz" (i % 5 === 0 ) value += "Buzz"   value = "7";  result = [1,2, Fizz,4,Buzz,Fizz, 7]
 *    8 < 10 ;  value = ""; (i % 3 === 0 )  value += "Fizz" (i % 5 === 0 ) value += "Buzz"   value = "8";  result = [1,2, Fizz,4,Buzz,Fizz, 7,8]
 *    9 < 10 ;  value = ""; (i % 3 === 0 )  value += "Fizz" (i % 5 === 0 ) value += "Buzz"   value = "";   result = [1,2, Fizz,4,Buzz,Fizz, 7,8,Fizz]
 *    10 < 10 ; value = ""; (i % 3 === 0 )  value += "Fizz" (i % 5 === 0 )  value += "Buzz"  value = "7";   result = [1,2, Fizz,4,Buzz,Fizz, 7,8,Fizz,Buzz]
 */

// function calcAge(birthYear, firstName) {
// 	const age = 2023 - birthYear;
// 	console.log(`${firstName} siz ${age} yoshdasiz.`);
// 	return age;
// }

// const age = calcAge(2001, "Jahongir");

// const names = ["sardor", "jahongir", "ahror", "doniyor"];
// const newNames =[]
// names.forEach(function (name) {
// 	const newName = name.charAt().toUpperCase() + name.slice(1).toLowerCase() + "bek";
// 	newNames.push(newName)
// });

// console.log(newNames);

// ----------------------------❇️OBJECTS(OBYEKTLAR)✅------------------------------------

// 💁🏻‍♂️ PROPERTIES
// const user = {
// 	name: "Jahongir",
// 	age: 22,
// 	email: "jahongir@gmail.com",
// 	location: "Andijon",
// 	lang: ["uzbek", "russian", "english"],
// };

// console.log(user);
// console.log(user.age);

// user.age = 25;
// console.log(user.age);

// console.log(user.location);

// console.log(user['location']);

// user['name'] = 'Ahror';

// console.log(user['name']);

// console.log(typeof user);

// const user = {
// 	name: "Jahongir",
// 	age: 22,
// 	email: "jahongir@gmail.com",
// 	location: "Andijon",
// 	lang: ["uzbek", "russian", "english"],

// 	login: function () {
// 		console.log("Siz bu saytga kirdingiz.");
// 	},

// 	logout: function () {
// 		console.log("Siz bu saytdagi sahifangizni tark etdingiz.");
// 	},

//  speak : function () {

//  }
// };

// user.login();
// user.logout();

const user = {
	name: "Jahongir",
	age: 22,
	email: "jahongir@gmail.com",
	location: "Andijon",
	lang: ["uzbek", "russian", "english"],

	login: function () {
		console.log("Siz bu saytga kirdingiz.");
	},

	logout: function () {
		console.log("Siz bu saytdagi sahifangizni tark etdingiz.");
	},

	speak: function () {
  this 
 },
};
