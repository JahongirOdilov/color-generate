// let name = prompt("Create your name");

// let letterOne = name.charAt(0).toUpperCase();
// let letters = name.slice(1, name.length).toLowerCase();
// let name2 = letterOne + letters;
// alert(`Hello ${name2}`);

//-------------------------LOOP operatori---------------------------------------
// let names = ["sardor", "ahror", "begzod"];
/*FOR LOOP */
// for (let i = 0; i < names.length; i++) {
// 	console.log(names[i].toLocaleUpperCase());
// }
/*WHILE LOOP */
// let i = 0;
// while (i < names.length) {
// 	console.log(names[i].toLocaleUpperCase());
// 	i++;
// }
/*DO WHILE LOOP */
// let i = 0;
// do {
// 	console.log(names[i].toLocaleUpperCase());
// 	i++;
// } while (i < names.length);

//-------------------------SWITCH CASE---------------------------------------

// let baho = "d";
// switch (baho) {
// 	case "A":
// 		console.log("Sizning bahoyingiz A ");
// 		break;
// 	case "B":
// 		console.log("Sizning bahoyingiz B ");
// 		break;
// 	case "D":
// 		console.log("Sizning bahoyingiz D ");
// 		break;
// 	default:
// 		console.log("Sizning bahoyingiz past !");
// }
const lists = [[2, 3, [4, 5]], [5], [4, 3]];
function spread(numbers) {
	return numbers.flat(Infinity);
}
const result = spread(lists);
console.log(result);
