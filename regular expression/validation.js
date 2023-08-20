// // REGULAR EXPRESSION

// // var reg = /[a-z]/gi;

// // var reg2 = new RegExp(/[a-z]/, "i");   // don't use this tips
// const inputs = document.querySelectorAll("input");
// const patterns = {
// 	telephone: /^\d{11}$/, // 11 ta raqam qabul qilish; //(^) bu belgi faqat raqam bo'lishligi yani faqat raqam qabul qilsin diyishlik;
// 	username: /^[a-z\d]{5,12}$/i,
// 	password: /^[\w@-]{8,20}$/,
// 	slug: /^[a-z\d-]{8-20}$/,
// 	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
// };

// // validation function

// function validate(field, regex) {
// 	if (regex.test(field.value)) {
// 		field.className = "valid";
// 	} else {
// 		field.className = "invalid";
// 	}
// }

// inputs.forEach((input) => {
// 	input.addEventListener("keyup", (e) => {
// 		//console.log(e.target.attributes.name.value);

// 		validate(e.target, patterns[e.target.attributes.name.value]);
// 	});
// });

// function calc(str) {

// 	let str = "edwfh10ehfmm12cvdj10";
// let a = "";
// for (let i = 0; i < str.length; i++) {

// 	    if(str[i] === /[\d]/gi){
// 						a += str[i];
// 					}

// 				}
// 				return a;

// }
//   calc("djh10sdsvb20");
// console.log(+"-20");

// console.log();

// let str = "abc11fgd10fhgf-5bc";
// let a = "";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
// 	if (str[i] === /\d/gi) {
// 		a += str.slice(i);
// 	}
// }

// console.log(a);

// function str() {
//  return "My name is ";

// }

// function name(string, name) {
//  console.log(string() + name);
// }

// name(str, "Jahongir");

// function hi(name) {
// 	function greating(hello) {
// 		console.log(`Salom ${hello} ${name}`);
// 	}
// 	return greating;
// }

// const my = hi("Boburjon");
// my("do'stim");

// const number = [1, 2, 3, 4, 5, 6, 7];
// function numbers(number, index) {
// 	console.log(`[${index}]=>${number}`);
// }

// number.forEach(numbers);


// console.log(----------------------------------------------------------------);

// function forEach(fn, index) {
//  for (let index = 0; index < number.length; index++) {

//   fn(number[index], index);

// }
// }

// fn(numbers);
