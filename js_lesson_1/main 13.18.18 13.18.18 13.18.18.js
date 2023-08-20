const NUM = Math.floor(Math.random() * 20);

console.log("NUM = ", NUM);

const value = +prompt("Please enter a number");
if (value < NUM) {
	const value = +prompt("Please enter smaller number");
}
if(value > NUM) {
	const value = +prompt("Please enter biggest number");

}

if(value === NUM) {
	console.log("You find it");

}
if(value < NUM) {
	const value = +prompt("Please enter a number");

}
